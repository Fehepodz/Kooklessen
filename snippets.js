const SNIPPET_CATEGORIE_VOLGORDE = [
  'Snijtechnieken', 'Koken', 'Bakken', 'Bereiden', 'Hygiëne', 'Etenswaren'
];

const ETENSWAREN_VOLGORDE = [
  'Groente & fruit', 'Vleeswaren', 'Zuivel', 'Pasta', 'Kruiden', 'Brood', 'Sauzen', 'Bakken', 'Overige'
];

const SNIPPETS = [
  {
    id: 'julienne', categorie: 'Snijtechnieken',
    naam: 'Julienne snijden',
    beschrijving: 'Snijd de groente in plakken van 3mm dik. Stapel de plakken en snijd ze in lange dunne reepjes van 3mm breed — zoals lucifers.',
    afbeelding: 'snippets/julienne.jpg'
  },
  {
    id: 'brunoise', categorie: 'Snijtechnieken',
    naam: 'Brunoise snijden',
    beschrijving: 'Maak eerst julienne-reepjes. Verzamel de reepjes en snijd dwars erdoorheen in gelijke kleine blokjes van ongeveer 3×3×3mm.',
    afbeelding: 'snippets/brunoise.jpg'
  },
  {
    id: 'mes-vasthouden', categorie: 'Snijtechnieken',
    naam: 'Mes vasthouden',
    beschrijving: 'Gebruik de klauwgreep: krul je vingers naar binnen zodat de knokkels het mes geleiden. De vingertips zijn altijd ingetrokken. Nooit snijden met gestrekte vingers.',
    afbeelding: 'snippets/mes-vasthouden.jpg'
  },
  {
    id: 'water-koken', categorie: 'Koken',
    naam: 'Water aan de kook brengen',
    beschrijving: 'Vul een pan met water en voeg een snuf zout toe. Zet op hoog vuur met het deksel op de pan. Wacht tot er grote bellen opstijgen — dan kookt het water (100°C).',
    afbeelding: 'snippets/water-koken.jpg'
  },
  {
    id: 'pasta-koken', categorie: 'Koken',
    naam: 'Pasta koken',
    beschrijving: 'Breng ruim gezouten water aan de kook. Voeg de pasta toe en roer direct om. Kook al dente: volg de aanduiding op de verpakking minus 1 minuut. Giet af in een vergiet.',
    afbeelding: 'snippets/pasta-koken.jpg'
  },
  {
    id: 'eieren-koken', categorie: 'Koken',
    naam: 'Eieren koken',
    beschrijving: 'Leg eieren voorzichtig in kokend water. Zachtgekookt: 6 min. Halfzacht: 8 min. Hardgekookt: 10 min. Laat daarna schrikken in koud water om het gaarproces te stoppen.',
    afbeelding: 'snippets/eieren-koken.jpg'
  },
  {
    id: 'blancheren', categorie: 'Koken',
    naam: 'Groenten blancheren',
    beschrijving: 'Kook groenten 1–3 minuten in gezouten kokend water. Schep ze direct over in een bak met ijswater. Dit stopt het gaarproces en behoudt de kleur en de knapperige beet.',
    afbeelding: 'snippets/blancheren.jpg'
  },
  {
    id: 'pan-opwarmen', categorie: 'Bakken',
    naam: 'Pan opwarmen',
    beschrijving: 'Zet de pan op middelhoog vuur en wacht 1–2 minuten. Voeg pas dan olie of boter toe.',
    afbeelding: 'snippets/pan-opwarmen.jpg'
  },

  // ── Ui ──
  {
    id: 'ui-snipperen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui snipperen',
    beschrijving: 'Schil de ui en snijd hem doormidden. Leg de platte kant op het snijplank. Snijd dunne reepjes in de lengterichting zonder helemaal door te snijden. Draai 90° en snijd dwars erdoorheen in kleine gelijke stukjes.',
    afbeelding: 'snippets/ui-snipperen.png'
  },
  {
    id: 'ui-halveringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui halveringen',
    beschrijving: 'Schil de ui en snijd hem doormidden. Leg de platte kant naar beneden. Snijd de helft in dunne boogjes van 3–5 mm. Je krijgt halve ringen.',
    afbeelding: 'snippets/ui-halveringen.png'
  },
  {
    id: 'ui-kwartringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui kwartringen',
    beschrijving: 'Snijd de ui in vieren. Leg een kwart op de platte kant en snijd het in dunne boogjes. Je krijgt kwart-ringen, iets kleiner dan halve ringen.',
    afbeelding: 'snippets/ui-kwartringen.png'
  },
  {
    id: 'ui-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui julienne',
    beschrijving: 'Snijd de ui doormidden. Leg de platte kant naar beneden. Snijd dunne reepjes in de lengterichting van 2–3 mm breed. Je krijgt lange sliertjes ui.',
    afbeelding: 'snippets/ui-julienne.png'
  },
  {
    id: 'ui-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui in grove stukken',
    beschrijving: 'Snijd de geschilde ui doormidden en dan nog een keer. Snijd de parten in grote stukken van 3–4 cm.',
    afbeelding: 'snippets/ui-grovestukken.png'
  },

  // ── Knoflook ──
  {
    id: 'knoflook-hakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Knoflook hakken',
    beschrijving: 'Verwijder de papierachtige schil. Druk het teentje plat met de zijkant van je mes. Snijd in dunne plakjes, verzamel ze en hak ze fijn met een wiegbeweging.',
    afbeelding: 'snippets/knoflook-fijnhakken.png'
  },
  {
    id: 'knoflook-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Knoflook in plakjes',
    beschrijving: 'Verwijder de schil. Druk het teentje plat met de zijkant van je mes. Snijd het teentje in dunne plakjes van 1–2 mm dik.',
    afbeelding: 'snippets/knoflook-plakjes.png'
  },
  {
    id: 'knoflook-pureren', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Knoflook pureren',
    beschrijving: 'Hak de knoflook zo fijn mogelijk. Strooi een snufje zout eroverheen en wrijf met de platte kant van je mes heen en weer totdat je een gladde pasta krijgt.',
    afbeelding: 'snippets/knoflook-pureren.png'
  },

  // ── Aubergine ──
  {
    id: 'aubergine-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aubergine in blokjes',
    beschrijving: 'Snijd de aubergine in schijfjes van 1 cm dik. Stapel de schijfjes en snijd ze in repen. Snijd de repen daarna dwars door in gelijke blokjes van 1×1 cm.',
    afbeelding: 'snippets/aubergine-blokjes.png'
  },
  {
    id: 'aubergine-rondellen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aubergine in rondellen',
    beschrijving: 'Leg de aubergine op het snijplank. Snijd hem recht door in ronde schijfjes van 1 cm dik.',
    afbeelding: 'snippets/aubergine-rondellen.png'
  },

  // ── Bleekselderij ──
  {
    id: 'bleekselderij-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Bleekselderij brunoise',
    beschrijving: 'Snijd de stengel in dunne reepjes in de lengte. Leg de reepjes bij elkaar en snijd ze dwars in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/bleekselderij-brunoise.png'
  },
  {
    id: 'bleekselderij-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Bleekselderij in grove stukken',
    beschrijving: 'Snijd de bleekselderij in grote stukken van 3–4 cm.',
    afbeelding: 'snippets/bleekselderij-grovestukken.png'
  },
  {
    id: 'bleekselderij-halvemaantjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Bleekselderij halvemaantjes',
    beschrijving: 'Snijd de stengel doormidden in de lengte. Leg de platte kant naar beneden en snijd in schijfjes van 1 cm breed. Je krijgt halvemaantjesvormpjes.',
    afbeelding: 'snippets/bleekselderij-halvemaantjes.png'
  },
  {
    id: 'bleekselderij-schijfjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Bleekselderij in schijfjes',
    beschrijving: 'Leg de stengel op het snijplank. Snijd hem in ronde schijfjes van 5 mm dik. Snijd ze gelijkmatig zodat ze tegelijk gaar zijn.',
    afbeelding: 'snippets/bleekselderij-schijfjes.png'
  },

  // ── Champignon ──
  {
    id: 'champion-ciseleren', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Champignon ciseleren',
    beschrijving: 'Snijd de champignon in zo dun mogelijke plakjes, zo dun als je kunt.',
    afbeelding: 'snippets/champion-ciseleren.png'
  },
  {
    id: 'champion-fijngehakt', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Champignon fijngehakt',
    beschrijving: 'Snijd de champignons in plakjes. Leg de plakjes op elkaar en hak ze fijn met een wiegbeweging van het mes. Ga door totdat je kleine, gelijke stukjes hebt.',
    afbeelding: 'snippets/champion-fijngehakt.png'
  },
  {
    id: 'champion-kwartjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Champignon in kwartjes',
    beschrijving: 'Snijd de champignon doormidden. Leg de helften op de platte kant en snijd ze nog een keer doormidden. Je hebt nu vier gelijke kwartjes.',
    afbeelding: 'snippets/champion-kwartjes.png'
  },
  {
    id: 'champion-lamellen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Champignon in lamellen',
    beschrijving: 'Snijd de champignon in plakjes van 3–4 mm dik. Snijd ze van boven naar beneden zodat de plaatjes heel blijven.',
    afbeelding: 'snippets/champion-lamellen.png'
  },

  // ── Courgette ──
  {
    id: 'courgette-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Courgette brunoise',
    beschrijving: 'Snijd de courgette in plakken van 3 mm. Snijd de plakken in reepjes van 3 mm breed. Snijd de reepjes daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/courgette-brunoise.png'
  },
  {
    id: 'courgette-diagonaal', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Courgette diagonaal',
    beschrijving: 'Leg de courgette op het snijplank. Snijd hem schuin in ovaalvormige schijfjes van 1 cm dik.',
    afbeelding: 'snippets/courgette-diagonaal.png'
  },
  {
    id: 'courgette-halvemaantjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Courgette halvemaantjes',
    beschrijving: 'Snijd de courgette doormidden in de lengte. Leg de platte kant naar beneden en snijd hem in schijfjes van 1 cm breed. Je krijgt halvemaantjesvormpjes.',
    afbeelding: 'snippets/courgette-halvemaantjes.png'
  },
  {
    id: 'courgette-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Courgette julienne',
    beschrijving: 'Snijd de courgette in plakken van 3 mm dik. Stapel de plakken en snijd ze in lange dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/courgette-julienne.png'
  },
  {
    id: 'courgette-rondellen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Courgette in rondellen',
    beschrijving: 'Leg de courgette op het snijplank. Snijd hem recht in ronde schijfjes van 1 cm dik.',
    afbeelding: 'snippets/courgette-rondellen.png'
  },

  // ── Paprika ──
  {
    id: 'paprika-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Paprika brunoise',
    beschrijving: 'Verwijder de zaadlijsten van binnen. Snijd de paprika in repen van 3 mm breed. Leg de repen bij elkaar en snijd ze in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/paprika-brunoise.png'
  },
  {
    id: 'paprika-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Paprika in grove stukken',
    beschrijving: 'Verwijder de zaadlijsten van binnen. Snijd de paprika in grote stukken van 3–4 cm.',
    afbeelding: 'snippets/paprika-grovestukken.png'
  },
  {
    id: 'paprika-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Paprika julienne',
    beschrijving: 'Verwijder de zaadlijsten van binnen. Snijd de paprika in lange dunne reepjes van 2–3 mm breed.',
    afbeelding: 'snippets/paprika-julienne.png'
  },
  {
    id: 'paprika-ringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Paprika in ringen',
    beschrijving: 'Snijd de paprika recht door in ringen van 1 cm dik. Verwijder de losse zaadjes.',
    afbeelding: 'snippets/paprika-ringen.png'
  },

  // ── Prei ──
  {
    id: 'prei-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Prei in grove stukken',
    beschrijving: 'Snijd het donkergroene blad en het worteleinde eraf. Snijd de prei in grote stukken van 3–4 cm. Was ze goed, want er zit vaak zand tussen de lagen.',
    afbeelding: 'snippets/prei-grovestukken.png'
  },
  {
    id: 'prei-halveringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Prei halveringen',
    beschrijving: 'Snijd de prei doormidden in de lengte. Snijd de helften daarna in stukken van 2 cm breed. Je krijgt halve ringen. Was ze goed.',
    afbeelding: 'snippets/prei-halveringen.png'
  },
  {
    id: 'prei-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Prei julienne',
    beschrijving: 'Snijd de prei in de lengte in dunne reepjes van 2–3 mm breed. Was de reepjes goed want er kan zand tussen zitten.',
    afbeelding: 'snippets/prei-julienne.png'
  },
  {
    id: 'prei-ringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Prei in ringen',
    beschrijving: 'Snijd de prei recht in ringen van 1 cm breed. Was de ringen daarna goed in een zeef, want er zit vaak zand tussen de lagen.',
    afbeelding: 'snippets/prei-ringen.png'
  },

  // ── Sperziebonen ──
  {
    id: 'sperziebonen-diagonaal', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sperziebonen diagonaal',
    beschrijving: 'Leg de sperzieboon schuin op het snijplank en snijd hem diagonaal in stukken van 3–4 cm.',
    afbeelding: 'snippets/sperziebonen-diagonaal.png'
  },
  {
    id: 'sperziebonen-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sperziebonen in grove stukken',
    beschrijving: 'Verwijder de puntjes aan beide kanten van de boon. Snijd de bonen daarna recht in stukken van 3–4 cm.',
    afbeelding: 'snippets/sperziebonen-grovestukken.png'
  },
  {
    id: 'sperziebonen-puntjesafsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sperziebonen puntjes afsnijden',
    beschrijving: 'Leg een paar boontjes naast elkaar op het snijplank. Snijd met één beweging de harde puntjes aan één kant eraf. Draai om en doe hetzelfde aan de andere kant.',
    afbeelding: 'snippets/sperziebonen-puntjesafsnijden.png'
  },
  {
    id: 'sperziebonen-repen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sperziebonen in repen',
    beschrijving: 'Snijd de sperzieboon in de lengte door in 2 of 3 dunne repen.',
    afbeelding: 'snippets/sperziebonen-repen.png'
  },

  // ── Tomaat ──
  {
    id: 'tomaat-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Tomaat in blokjes',
    beschrijving: 'Snijd de tomaat in partjes. Snijd het zachte zaaddeel eruit als het moet. Snijd de partjes daarna in gelijke blokjes van 1×1 cm.',
    afbeelding: 'snippets/tomaat-blokjes.png'
  },
  {
    id: 'tomaat-halvecherry', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Tomaat halvecherry',
    beschrijving: 'Leg de cherrytomaatjes op het snijplank. Snijd ze met één rechte beweging doormidden. Je krijgt mooie halve bolletjes.',
    afbeelding: 'snippets/tomaat-halvecherry.png'
  },
  {
    id: 'tomaat-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Tomaat in partjes',
    beschrijving: 'Snijd de tomaat doormidden. Snijd elke helft nog een keer doormidden. Je hebt nu 4 partjes. Je kunt het kroontje ook afsnijden.',
    afbeelding: 'snippets/tomaat-partjes.png'
  },
  {
    id: 'tomaat-schijfjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Tomaat in schijfjes',
    beschrijving: 'Leg de tomaat op zijn kant op het snijplank. Snijd hem in gelijke schijfjes van 1 cm dik.',
    afbeelding: 'snippets/tomaat-schijfjes.png'
  },

  // ── Wortel ──
  {
    id: 'wortel-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Wortel brunoise',
    beschrijving: 'Schil de wortel en snijd hem in plakken van 3 mm. Snijd de plakken in reepjes van 3 mm. Snijd de reepjes daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/wortel-brunoise.png'
  },
  {
    id: 'wortel-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Wortel in grove stukken',
    beschrijving: 'Schil de wortel. Snijd hem in grote stukken van 3–4 cm.',
    afbeelding: 'snippets/wortel-grovestukken.png'
  },
  {
    id: 'wortel-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Wortel julienne',
    beschrijving: 'Schil de wortel. Snijd hem in plakken van 3 mm dik. Stapel de plakken en snijd ze in lange dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/wortel-julienne.png'
  },
  {
    id: 'wortel-rondellen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Wortel in rondellen',
    beschrijving: 'Schil de wortel. Leg hem op het snijplank en snijd hem recht in ronde schijfjes van 1 cm dik.',
    afbeelding: 'snippets/wortel-rondellen.png'
  },
];
