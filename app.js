'use strict';

// ── State ──
let recepten = [];
let huidigeView = 'lijst';
let viewId = null;
let formulier = null;
let snippetStapIdx = null;
let verwijderId = null;
let zoekterm = '';
let snippetTab = null;

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  laadRecepten();
  render();
});

// ── Storage ──
function laadRecepten() {
  try { recepten = JSON.parse(localStorage.getItem('kooklessen-recepten') || '[]'); }
  catch { recepten = []; }
}

function slaanOp() {
  try { localStorage.setItem('kooklessen-recepten', JSON.stringify(recepten)); }
  catch { alert('Opslaan mislukt: de opslagruimte is vol. Verwijder grote foto\'s of oude recepten.'); }
}

// ── Helpers ──
function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatTijd(min) {
  if (!min) return '';
  if (min < 60) return min + ' min';
  const u = Math.floor(min / 60), m = min % 60;
  return m ? `${u} u ${m} min` : `${u} uur`;
}

function categoriEmoji(c) {
  return { voorgerecht:'🥗', hoofdgerecht:'🍽️', nagerecht:'🍰', bijgerecht:'🥦', soep:'🍵', snack:'🥪', ontbijt:'🍳' }[c] || '🍳';
}

// ── Navigation ──
function navigeer(view, id) {
  id = id || null;
  huidigeView = view;
  viewId = id;
  if (view === 'editor') {
    const bestaand = id ? recepten.find(r => r.id === id) : null;
    formulier = bestaand
      ? JSON.parse(JSON.stringify(bestaand))
      : { id: genId(), titel: '', beschrijving: '', porties: 4, tijd: 30,
          moeilijkheid: 'gemiddeld', categorie: 'hoofdgerecht',
          ingredienten: [], stappen: [], aangemaakt: Date.now(), bijgewerkt: Date.now() };
  }
  render();
  window.scrollTo(0, 0);
}

// ── Render ──
function render() { renderHeader(); renderMain(); }

function renderHeader() {
  const el = document.getElementById('header-acties');
  if (huidigeView === 'lijst') {
    el.innerHTML = `<button class="btn btn-wit" onclick="navigeer('editor')">+ Nieuw recept</button>`;
  } else if (huidigeView === 'editor') {
    el.innerHTML = `
      <button class="btn btn-ghost-wit" onclick="navigeer('lijst')">&#8592; Terug</button>
      <button class="btn btn-wit" onclick="slaReceptOp()">&#128190; Opslaan</button>`;
  } else {
    el.innerHTML = `
      <button class="btn btn-ghost-wit" onclick="navigeer('lijst')">&#8592; Terug</button>
      <button class="btn btn-ghost-wit" onclick="navigeer('editor', viewId)">&#9998; Bewerken</button>
      <button class="btn btn-wit" onclick="window.print()">&#128438; Afdrukken</button>`;
  }
}

function renderMain() {
  const el = document.getElementById('main');
  if (huidigeView === 'lijst') el.innerHTML = htmlLijst();
  else if (huidigeView === 'editor') el.innerHTML = htmlEditor();
  else el.innerHTML = htmlViewer();
}

// ── Lijst ──
function htmlLijst() {
  const gefilterd = recepten.filter(r =>
    !zoekterm || r.titel.toLowerCase().includes(zoekterm.toLowerCase()) ||
    (r.beschrijving || '').toLowerCase().includes(zoekterm.toLowerCase())
  );

  const kaarten = gefilterd.length === 0
    ? `<div class="leeg-state">${recepten.length === 0
        ? 'Nog geen recepten. Klik op <strong>+ Nieuw recept</strong> om te beginnen.'
        : 'Geen recepten gevonden voor <strong>' + esc(zoekterm) + '</strong>'}</div>`
    : gefilterd.map(r => htmlKaart(r)).join('');

  return `
    <div class="lijst-header">
      <h1>Recepten <span class="aantal">${recepten.length}</span></h1>
      <input type="search" class="zoekbalk" placeholder="Zoeken..." value="${esc(zoekterm)}"
        oninput="zoekterm=this.value; renderMain()">
    </div>
    <div class="recept-grid">${kaarten}</div>`;
}

function htmlKaart(r) {
  const eersteStapMetFoto = r.stappen.find(s => s.afbeelding || s.snippetId);
  let fotoHTML;
  if (eersteStapMetFoto) {
    const src = eersteStapMetFoto.afbeelding || ('snippets/' + eersteStapMetFoto.snippetId + '.jpg');
    fotoHTML = `<div class="kaart-foto"><img src="${esc(src)}" alt="" onerror="this.parentElement.textContent='${categoriEmoji(r.categorie)}'"></div>`;
  } else {
    fotoHTML = `<div class="kaart-foto">${categoriEmoji(r.categorie)}</div>`;
  }
  return `
    <div class="recept-kaart" onclick="navigeer('viewer','${esc(r.id)}')">
      ${fotoHTML}
      <div class="kaart-inhoud">
        <div class="kaart-titel">${esc(r.titel || 'Naamloos recept')}</div>
        ${r.beschrijving ? `<div class="kaart-beschrijving">${esc(r.beschrijving)}</div>` : ''}
        <div class="kaart-meta">
          ${r.tijd ? `<span>&#9201; ${formatTijd(r.tijd)}</span>` : ''}
          ${r.porties ? `<span>&#128101; ${r.porties} port.</span>` : ''}
          <span class="badge badge-${esc(r.moeilijkheid)}">${esc(r.moeilijkheid)}</span>
        </div>
        <div class="kaart-acties" onclick="event.stopPropagation()">
          <button class="btn-icon" title="Bewerken" onclick="navigeer('editor','${esc(r.id)}')">&#9998;</button>
          <button class="btn-icon btn-icon-gevaar" title="Verwijderen" onclick="openVerwijderModal('${esc(r.id)}')">&#128465;</button>
        </div>
      </div>
    </div>`;
}

// ── Editor ──
function htmlEditor() {
  const f = formulier;
  const categorieOpties = ['voorgerecht','hoofdgerecht','nagerecht','bijgerecht','soep','snack','ontbijt'];
  const moeilijkheidOpties = ['makkelijk','gemiddeld','moeilijk'];
  return `
    <div class="editor-wrapper">
      <div class="editor-titel-sectie">
        <input type="text" class="editor-titel-input" placeholder="Naam van het recept..."
          value="${esc(f.titel)}" oninput="formulier.titel=this.value">
      </div>
      <div class="editor-kolommen">
        <div class="editor-links">
          <div class="editor-sectie">
            <div class="sectie-titel">Beschrijving</div>
            <textarea class="editor-textarea" rows="3" placeholder="Korte omschrijving..."
              oninput="formulier.beschrijving=this.value">${esc(f.beschrijving)}</textarea>
          </div>
          <div class="editor-sectie">
            <div class="sectie-titel">Details</div>
            <div class="details-grid">
              <label class="detail-label"><span>Porties</span>
                <input type="number" class="detail-input" min="1" max="100" value="${esc(f.porties)}"
                  oninput="formulier.porties=parseInt(this.value)||1"></label>
              <label class="detail-label"><span>Bereidingstijd (min)</span>
                <input type="number" class="detail-input" min="1" max="999" value="${esc(f.tijd)}"
                  oninput="formulier.tijd=parseInt(this.value)||0"></label>
              <label class="detail-label"><span>Moeilijkheid</span>
                <select class="detail-input" onchange="formulier.moeilijkheid=this.value">
                  ${moeilijkheidOpties.map(m => `<option value="${m}" ${f.moeilijkheid===m?'selected':''}>${m.charAt(0).toUpperCase()+m.slice(1)}</option>`).join('')}
                </select></label>
              <label class="detail-label"><span>Categorie</span>
                <select class="detail-input" onchange="formulier.categorie=this.value">
                  ${categorieOpties.map(c => `<option value="${c}" ${f.categorie===c?'selected':''}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join('')}
                </select></label>
            </div>
          </div>
          <div class="editor-sectie">
            <div class="sectie-titel">Ingrediënten</div>
            <div id="ingredienten-lijst">
              ${f.ingredienten.map((ing, i) => htmlIngredient(ing, i)).join('')}
            </div>
            <button class="btn btn-omlijnd btn-klein" style="margin-top:4px" onclick="voegIngredientToe()">+ Ingrediënt</button>
          </div>
        </div>
        <div class="editor-rechts">
          <div class="editor-sectie">
            <div class="sectie-titel">Bereidingswijze</div>
            <div id="stappen-lijst">
              ${f.stappen.map((stap, i) => htmlStapEditor(stap, i)).join('')}
            </div>
            <button class="btn btn-omlijnd" onclick="voegStapToe()">+ Stap toevoegen</button>
          </div>
        </div>
      </div>
    </div>`;
}

function htmlIngredient(ing, i) {
  return `
    <div class="ingredient-rij">
      <input type="text" class="ingredient-input" placeholder="bijv. 2 uien of 100g bloem"
        value="${esc(ing.tekst)}" oninput="formulier.ingredienten[${i}].tekst=this.value">
      <button class="btn-verwijder" onclick="verwijderIngredient(${i})" title="Verwijder">&#215;</button>
    </div>`;
}

function htmlStapEditor(stap, i) {
  const n = formulier.stappen.length;
  const src = stap.afbeelding || (stap.snippetId ? `snippets/${stap.snippetId}.jpg` : null);
  return `
    <div class="stap-kaart">
      <div class="stap-nr">${i + 1}</div>
      <div class="stap-inhoud">
        <textarea class="stap-textarea" rows="3" placeholder="Beschrijf deze stap..."
          oninput="formulier.stappen[${i}].tekst=this.value">${esc(stap.tekst)}</textarea>
        <div class="stap-foto-wrapper">
          ${src
            ? `<div class="stap-foto-preview">
                <img src="${esc(src)}" alt="" onerror="this.style.display='none'">
                <button class="verwijder-foto" onclick="verwijderStapFoto(${i})" title="Verwijder foto">&#215;</button>
              </div>`
            : `<div class="stap-foto-leeg">Geen afbeelding</div>`}
          <div class="stap-foto-acties">
            <input type="file" accept="image/*" id="upload-${i}" style="display:none"
              onchange="verwerkUpload(${i},this)">
            <button class="btn btn-ghost btn-klein" onclick="document.getElementById('upload-${i}').click()">
              &#128247; Upload foto
            </button>
            <button class="btn btn-ghost btn-klein" onclick="openSnippetModal(${i})">
              &#128203; Snippet kiezen
            </button>
          </div>
        </div>
      </div>
      <div class="stap-besturing">
        ${i > 0 ? `<button class="btn-icon" onclick="verplaatsStap(${i},-1)" title="Omhoog">&#8593;</button>` : '<span style="width:32px"></span>'}
        ${i < n-1 ? `<button class="btn-icon" onclick="verplaatsStap(${i},1)" title="Omlaag">&#8595;</button>` : '<span style="width:32px"></span>'}
        <button class="btn-icon btn-icon-gevaar" onclick="verwijderStap(${i})" title="Verwijder stap">&#215;</button>
      </div>
    </div>`;
}

// ── Viewer ──
function htmlViewer() {
  const r = recepten.find(rec => rec.id === viewId);
  if (!r) { setTimeout(() => navigeer('lijst'), 0); return '<p>Laden...</p>'; }

  const ingHTML = r.ingredienten.length === 0
    ? '<p class="leeg">Geen ingrediënten opgegeven.</p>'
    : `<ul class="ing-lijst">${r.ingredienten.map(ing => `<li>${esc(ing.tekst)}</li>`).join('')}</ul>`;

  const stapHTML = r.stappen.length === 0
    ? '<p class="leeg">Geen stappen opgegeven.</p>'
    : r.stappen.map((s, i) => {
        const src = s.afbeelding || (s.snippetId ? `snippets/${s.snippetId}.jpg` : null);
        return `
          <div class="viewer-stap">
            <div class="viewer-stap-nr">${i + 1}</div>
            <div class="viewer-stap-inhoud">
              ${src ? `<img src="${esc(src)}" alt="" onerror="this.style.display='none'">` : ''}
              <p>${esc(s.tekst).replace(/\n/g, '<br>')}</p>
            </div>
          </div>`;
      }).join('');

  return `
    <div class="viewer-wrapper">
      <div class="viewer-header">
        <h1 class="viewer-titel">${esc(r.titel || 'Naamloos recept')}</h1>
        <div class="viewer-meta">
          ${r.tijd ? `<span>&#9201; ${formatTijd(r.tijd)}</span>` : ''}
          ${r.porties ? `<span>&#128101; ${r.porties} porties</span>` : ''}
          <span class="badge badge-${esc(r.moeilijkheid)}">${esc(r.moeilijkheid)}</span>
          ${r.categorie ? `<span>${esc(r.categorie)}</span>` : ''}
        </div>
        ${r.beschrijving ? `<p class="viewer-beschrijving">${esc(r.beschrijving)}</p>` : ''}
      </div>
      <div class="viewer-body">
        <div class="viewer-ingredienten">
          <h2>Ingrediënten</h2>${ingHTML}
        </div>
        <div class="viewer-stappen">
          <h2>Bereidingswijze</h2>${stapHTML}
        </div>
      </div>
    </div>`;
}

// ── Snippet modal ──
function openSnippetModal(stapIndex) {
  snippetStapIdx = stapIndex;
  snippetTab = snippetTab || SNIPPETS[0].categorie;
  renderSnippetModal();
  document.getElementById('snippet-overlay').classList.remove('verborgen');
  document.getElementById('snippet-modal').classList.remove('verborgen');
}

function sluitSnippetModal() {
  snippetStapIdx = null;
  document.getElementById('snippet-overlay').classList.add('verborgen');
  document.getElementById('snippet-modal').classList.add('verborgen');
}

function renderSnippetModal() {
  const cats = [...new Set(SNIPPETS.map(s => s.categorie))];
  document.getElementById('snippet-tabs').innerHTML =
    cats.map(c => `<button class="tab-btn ${c===snippetTab?'actief':''}" onclick="wisselTab('${esc(c)}')">${esc(c)}</button>`).join('');

  const lijst = SNIPPETS.filter(s => s.categorie === snippetTab);
  document.getElementById('snippet-grid').innerHTML = `
    <div class="snippet-kaarten">
      ${lijst.map(s => `
        <div class="snippet-kaart" onclick="kiesSnippet('${esc(s.id)}')">
          <div class="snippet-foto">
            <img src="${esc(s.afbeelding)}" alt="${esc(s.naam)}"
              onerror="this.parentElement.textContent='${s.emoji}'">
          </div>
          <div class="snippet-naam">${esc(s.naam)}</div>
          <div class="snippet-preview">${esc(s.beschrijving.slice(0, 65))}...</div>
        </div>`).join('')}
    </div>`;
}

function wisselTab(cat) {
  snippetTab = cat;
  renderSnippetModal();
}

function kiesSnippet(snippetId) {
  if (snippetStapIdx === null) return;
  const s = SNIPPETS.find(x => x.id === snippetId);
  if (!s) return;
  formulier.stappen[snippetStapIdx].tekst = s.beschrijving;
  formulier.stappen[snippetStapIdx].snippetId = s.id;
  formulier.stappen[snippetStapIdx].afbeelding = null;
  sluitSnippetModal();
  renderMain();
}

// ── Editor CRUD ──
function voegIngredientToe() {
  formulier.ingredienten.push({ id: genId(), tekst: '' });
  renderMain();
  setTimeout(() => {
    const inputs = document.querySelectorAll('.ingredient-input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  }, 40);
}

function verwijderIngredient(i) {
  formulier.ingredienten.splice(i, 1);
  renderMain();
}

function voegStapToe() {
  formulier.stappen.push({ id: genId(), tekst: '', afbeelding: null, snippetId: null });
  renderMain();
  setTimeout(() => {
    const tas = document.querySelectorAll('.stap-textarea');
    if (tas.length) { tas[tas.length - 1].focus(); tas[tas.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  }, 40);
}

function verwijderStap(i) {
  formulier.stappen.splice(i, 1);
  renderMain();
}

function verplaatsStap(i, richting) {
  const j = i + richting;
  if (j < 0 || j >= formulier.stappen.length) return;
  [formulier.stappen[i], formulier.stappen[j]] = [formulier.stappen[j], formulier.stappen[i]];
  renderMain();
}

function verwijderStapFoto(i) {
  formulier.stappen[i].afbeelding = null;
  formulier.stappen[i].snippetId = null;
  renderMain();
}

function verwerkUpload(stapIndex, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    formulier.stappen[stapIndex].afbeelding = e.target.result;
    formulier.stappen[stapIndex].snippetId = null;
    renderMain();
  };
  reader.readAsDataURL(file);
}

// ── Opslaan ──
function slaReceptOp() {
  if (!formulier.titel.trim()) { alert('Geef het recept een naam.'); return; }
  formulier.bijgewerkt = Date.now();
  const idx = recepten.findIndex(r => r.id === formulier.id);
  if (idx >= 0) recepten[idx] = formulier;
  else recepten.push(formulier);
  slaanOp();
  navigeer('viewer', formulier.id);
}

// ── Verwijderen ──
function openVerwijderModal(id) {
  verwijderId = id;
  document.getElementById('bevestig-verwijder-knop').onclick = bevestigVerwijder;
  document.getElementById('verwijder-overlay').classList.remove('verborgen');
  document.getElementById('verwijder-modal').classList.remove('verborgen');
}

function sluitVerwijderModal() {
  verwijderId = null;
  document.getElementById('verwijder-overlay').classList.add('verborgen');
  document.getElementById('verwijder-modal').classList.add('verborgen');
}

function bevestigVerwijder() {
  if (!verwijderId) return;
  recepten = recepten.filter(r => r.id !== verwijderId);
  slaanOp();
  sluitVerwijderModal();
  if (huidigeView !== 'lijst') navigeer('lijst');
  else renderMain();
}
