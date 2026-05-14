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

  // ── Aardappel ──
  {
    id: 'aardappel-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel in blokjes',
    beschrijving: 'Schil de aardappel. Snijd hem in plakken van 1 cm dik. Snijd de plakken in repen en de repen daarna in gelijke blokjes van 1×1 cm.',
    afbeelding: 'snippets/aardappel-blokjes.png'
  },
  {
    id: 'aardappel-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel brunoise',
    beschrijving: 'Schil de aardappel. Snijd hem in plakken van 3 mm. Snijd de plakken in reepjes van 3 mm breed. Snijd de reepjes daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/aardappel-brunoise.png'
  },
  {
    id: 'aardappel-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel in grove stukken',
    beschrijving: 'Schil de aardappel. Snijd hem doormidden en dan nog een keer. Snijd de kwarten in grote gelijke stukken van 3–4 cm.',
    afbeelding: 'snippets/aardappel-grovestukken.png'
  },
  {
    id: 'aardappel-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel julienne',
    beschrijving: 'Schil de aardappel. Snijd hem in plakken van 3 mm dik. Stapel de plakken en snijd ze in lange dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/aardappel-julienne.png'
  },
  {
    id: 'aardappel-repen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel in repen',
    beschrijving: 'Schil de aardappel. Snijd hem in plakken van 1 cm dik. Snijd de plakken in repen van 1 cm breed — zoals friet.',
    afbeelding: 'snippets/aardappel-repen.png'
  },
  {
    id: 'aardappel-schijfjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Aardappel in schijfjes',
    beschrijving: 'Schil de aardappel. Leg hem op het snijplank en snijd hem recht in gelijke schijfjes van 5 mm dik.',
    afbeelding: 'snippets/aardappel-schijfjes.png'
  },

  // ── Augurk ──
  {
    id: 'augurk-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Augurk in blokjes',
    beschrijving: 'Snijd de augurk in de lengte door. Snijd de helften in repen en de repen daarna in gelijke blokjes van 1 cm.',
    afbeelding: 'snippets/augurk-blokjes.png'
  },
  {
    id: 'augurk-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Augurk brunoise',
    beschrijving: 'Snijd de augurk in plakken van 3 mm. Snijd de plakken in reepjes van 3 mm breed. Snijd de reepjes daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/augurk-brunoise.png'
  },

  // ── Boerenkool ──
  {
    id: 'boerenkool-bladerenplukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Boerenkool bladeren plukken',
    beschrijving: 'Houd de steel vast. Trek de bladeren met je andere hand langs de steel naar beneden eraf. Gooi de harde stelen weg.',
    afbeelding: 'snippets/boerenkool-bladerenplukken.png'
  },
  {
    id: 'boerenkool-chiffonade', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Boerenkool chiffonade',
    beschrijving: 'Verwijder de harde stelen. Rol de bladeren strak op en snijd ze in dunne reepjes van 2–3 mm breed.',
    afbeelding: 'snippets/boerenkool-chiffonade.png'
  },
  {
    id: 'boerenkool-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Boerenkool in grove stukken',
    beschrijving: 'Verwijder de harde stelen en scheur of snijd de bladeren in grote stukken van 5–6 cm.',
    afbeelding: 'snippets/boerenkool-grovestukken.png'
  },

  // ── Gember ──
  {
    id: 'gember-fijnhakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Gember fijnhakken',
    beschrijving: 'Schil de gember met een lepeltje of dunschiller. Snijd hem in dunne plakjes. Leg de plakjes op elkaar en hak ze fijn met een wiegbeweging.',
    afbeelding: 'snippets/gember-fijnhakken.png'
  },
  {
    id: 'gember-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Gember in plakjes',
    beschrijving: 'Schil de gember met een lepeltje of dunschiller. Snijd hem in dunne plakjes van 1–2 mm dik.',
    afbeelding: 'snippets/gember-plakjes.png'
  },
  {
    id: 'gember-raspen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Gember raspen',
    beschrijving: 'Schil de gember met een lepeltje. Rasp het stuk gember over een fijne rasp. Draai de gember regelmatig om zodat je alle kanten raspt.',
    afbeelding: 'snippets/gember-raspen.png'
  },

  // ── IJsbergsla ──
  {
    id: 'ijsbergsla-chiffonade', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'IJsbergsla chiffonade',
    beschrijving: 'Rol de slabladeren strak op. Snijd de rol in dunne reepjes van 2–3 mm breed. Je krijgt fijne sliertjes sla.',
    afbeelding: 'snippets/ijsbergsla-chiffonade.png'
  },
  {
    id: 'ijsbergsla-fijngesneden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'IJsbergsla fijn gesneden',
    beschrijving: 'Verwijder de buitenste bladeren. Snijd het hoofd in kwarten. Snijd de kwarten in dunne reepjes van 5 mm breed.',
    afbeelding: 'snippets/ijsbergsla-fijngesneden.png'
  },
  {
    id: 'ijsbergsla-grofsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'IJsbergsla grof snijden',
    beschrijving: 'Snijd het slahoofd in vieren. Snijd de kwarten in grote stukken van 3–4 cm.',
    afbeelding: 'snippets/ijsbergsla-grofsnijden.png'
  },
  {
    id: 'ijsbergsla-plukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'IJsbergsla plukken',
    beschrijving: 'Trek de bladeren losjes van het hoofd. Scheur grote bladeren in kleinere stukken. Spoel ze af en dep droog.',
    afbeelding: 'snippets/ijsbergsla-plukken.png'
  },

  // ── Jalapeño ──
  {
    id: 'jalapeno-fijnhakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Jalapeño fijnhakken',
    beschrijving: 'Verwijder het steeltje. Snijd de jalapeño doormidden en verwijder de zaadjes voor minder scherpte. Snijd in kleine stukjes en hak fijn.',
    afbeelding: 'snippets/jalapeno-fijnhakken.png'
  },
  {
    id: 'jalapeno-halveren-zaadjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Jalapeño halveren en zaadjes verwijderen',
    beschrijving: 'Snijd de jalapeño in de lengte doormidden. Schraap de zaadjes en het witte vlies eruit met een lepel of mes.',
    afbeelding: 'snippets/jalapeno-halverenenzaadjesverwijderen.png'
  },
  {
    id: 'jalapeno-ringen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Jalapeño in ringen',
    beschrijving: 'Verwijder het steeltje. Snijd de jalapeño in dunne ringen van 3–5 mm dik. Verwijder eventueel de zaadjes.',
    afbeelding: 'snippets/jalapeno-ringen.png'
  },

  // ── Komkommer ──
  {
    id: 'komkommer-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Komkommer brunoise',
    beschrijving: 'Snijd de komkommer in plakken van 3 mm. Snijd de plakken in reepjes van 3 mm breed. Snijd de reepjes daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/komkommer-brunoise.png'
  },
  {
    id: 'komkommer-halvemaantjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Komkommer halvemaantjes',
    beschrijving: 'Snijd de komkommer doormidden in de lengte. Leg de platte kant naar beneden en snijd hem in schijfjes van 1 cm breed. Je krijgt halvemaantjesvormpjes.',
    afbeelding: 'snippets/komkommer-halvemaantjes.png'
  },
  {
    id: 'komkommer-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Komkommer julienne',
    beschrijving: 'Snijd de komkommer in plakken van 3 mm dik. Stapel de plakken en snijd ze in lange dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/komkommer-julienne.png'
  },
  {
    id: 'komkommer-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Komkommer in plakjes',
    beschrijving: 'Leg de komkommer op het snijplank en snijd hem recht in ronde plakjes van 5 mm dik.',
    afbeelding: 'snippets/komkommer-plakjes.png'
  },

  // ── Kool ──
  {
    id: 'kool-chiffonade', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Kool chiffonade',
    beschrijving: 'Verwijder de buitenste bladeren en de harde stronk. Rol de bladeren strak op en snijd ze in dunne reepjes van 2–3 mm breed.',
    afbeelding: 'snippets/kool-chiffonade.png'
  },
  {
    id: 'kool-grovestukken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Kool in grove stukken',
    beschrijving: 'Verwijder de buitenste bladeren. Snijd de kool in 4 tot 6 partjes. Snijd de harde stronk weg.',
    afbeelding: 'snippets/kool-grovestukken.png'
  },
  {
    id: 'kool-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Kool julienne',
    beschrijving: 'Verwijder de buitenste bladeren en de harde stronk. Snijd de kool in dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/kool-julienne.png'
  },

  // ── Sla ──
  {
    id: 'sla-chiffonade', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sla chiffonade',
    beschrijving: 'Rol de slabladeren strak op. Snijd de rol in dunne reepjes van 2–3 mm breed.',
    afbeelding: 'snippets/sla-chiffonade.png'
  },
  {
    id: 'sla-fijnsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sla fijn snijden',
    beschrijving: 'Snijd het slahoofd doormidden. Leg de platte kant naar beneden en snijd de sla in dunne reepjes van 5 mm breed.',
    afbeelding: 'snippets/sla-fijnsnijden.png'
  },
  {
    id: 'sla-grofsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Sla grof snijden',
    beschrijving: 'Scheur of snijd de slabladeren in grote stukken van 4–5 cm.',
    afbeelding: 'snippets/sla-grofsnijden.png'
  },

  // ── Tauge ──
  {
    id: 'tauge-halveren', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Tauge halveren',
    beschrijving: 'Leg een handvol taugé op het snijplank en snijd ze doormidden. De stukjes zijn dan korter en gelijkmatiger.',
    afbeelding: 'snippets/tauge-halveren.png'
  },

  // ── Venkel ──
  {
    id: 'venkel-fijngesnipperd', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Venkel fijn gesnipperd',
    beschrijving: 'Verwijder de harde stronk. Snijd de venkel in dunne reepjes van 2–3 mm en hak die daarna fijn.',
    afbeelding: 'snippets/venkel-fijngesnipperd.png'
  },
  {
    id: 'venkel-julienne', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Venkel julienne',
    beschrijving: 'Verwijder de harde stronk. Snijd de venkel in plakken van 3 mm. Stapel de plakken en snijd ze in lange dunne reepjes van 3 mm breed.',
    afbeelding: 'snippets/venkel-julienne.png'
  },
  {
    id: 'venkel-kwart', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Venkel in kwarten',
    beschrijving: 'Snijd het loof eraf. Snijd de venkelbol in de lengte doormidden en dan nog een keer doormidden. Je hebt nu 4 kwarten.',
    afbeelding: 'snippets/venkel-kwart.png'
  },
  {
    id: 'venkel-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Venkel in plakjes',
    beschrijving: 'Verwijder het loof. Snijd de venkel in de lengte in dunne plakjes van 3–5 mm dik. Bewaar de harde kern voor stevigheid bij het snijden.',
    afbeelding: 'snippets/venkel-plakjes.png'
  },

  // ── Witlof ──
  {
    id: 'witlof-halveren', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Witlof halveren',
    beschrijving: 'Snijd de witlof in de lengte doormidden. Je hebt nu twee helften. Verwijder eventueel de buitenste bladeren als ze beschadigd zijn.',
    afbeelding: 'snippets/witlof-halveren.png'
  },
  {
    id: 'witlof-hartuitsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Witlof hart uitsnijden',
    beschrijving: 'Snijd de witlof doormidden. Maak met een schuine snede aan de onderkant het bittere hart los en snijd het weg.',
    afbeelding: 'snippets/witlof-hartuitsnijden.png'
  },

  // ── Zuurkool ──
  {
    id: 'zuurkool-fijnsnijden', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Zuurkool fijn snijden',
    beschrijving: 'Giet de zuurkool af en knijp overtollig vocht eruit. Leg het op het snijplank en snijd het fijn met een mes of gebruik een keukenschaar.',
    afbeelding: 'snippets/zuurkool-fijnsnijden.png'
  },

  // ── Ananas ──
  {
    id: 'ananas-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ananas in blokjes',
    beschrijving: 'Snijd de ananas in plakken. Snijd de schil eraf. Snijd het harde middengedeelte weg. Snijd de plakken in gelijke blokjes van 1 cm.',
    afbeelding: 'snippets/ananas-blokjes.png'
  },
  {
    id: 'ananas-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ananas brunoise',
    beschrijving: 'Verwijder de schil en de kern. Snijd de ananas in plakken van 3 mm dik. Snijd de plakken in reepjes en de reepjes in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/ananas-brunoise.png'
  },
  {
    id: 'ananas-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ananas in partjes',
    beschrijving: 'Snijd de ananas in 4 lange partjes. Verwijder de schil en de harde kern van elk partje. Snijd de partjes eventueel in stukken.',
    afbeelding: 'snippets/ananas-partjes.png'
  },
  {
    id: 'ananas-plakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ananas in plakken',
    beschrijving: 'Snijd de onderkant en het blad eraf. Verwijder de schil rondom. Snijd de ananas recht in ronde plakken van 1 cm dik. Snijd de kern eruit.',
    afbeelding: 'snippets/ananas-plakken.png'
  },

  // ── Appel ──
  {
    id: 'appel-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Appel brunoise',
    beschrijving: 'Schil de appel en verwijder het klokhuis. Snijd in plakken van 3 mm dik. Snijd de plakken in reepjes en daarna in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/appel-brunoise.png'
  },
  {
    id: 'appel-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Appel in partjes',
    beschrijving: 'Snijd de appel in vieren. Verwijder het klokhuis. Snijd elk kwart eventueel nog een keer door voor kleinere partjes.',
    afbeelding: 'snippets/appel-partjes.png'
  },
  {
    id: 'appel-schijfjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Appel in schijfjes',
    beschrijving: 'Leg de appel op het snijplank en snijd hem in ronde schijfjes van 5 mm dik. Snijd het klokhuis er met een uitsteker of mesje uit.',
    afbeelding: 'snippets/appel-schijfjes.png'
  },

  // ── Banaan ──
  {
    id: 'banaan-helft', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Banaan halveren',
    beschrijving: 'Schil de banaan. Snijd hem doormidden zodat je twee gelijke helften krijgt.',
    afbeelding: 'snippets/banaan-helft.png'
  },
  {
    id: 'banaan-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Banaan in plakjes',
    beschrijving: 'Schil de banaan. Snijd hem in ronde plakjes van 1 cm dik.',
    afbeelding: 'snippets/banaan-plakjes.png'
  },
  {
    id: 'banaan-prakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Banaan prakken',
    beschrijving: 'Schil de banaan. Leg hem in een kom en prak hem fijn met een vork tot een gladde puree.',
    afbeelding: 'snippets/banaan-prakken.png'
  },

  // ── Citroen ──
  {
    id: 'citroen-schijfjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Citroen in schijfjes',
    beschrijving: 'Leg de citroen op zijn kant en snijd hem in ronde schijfjes van 5 mm dik. Verwijder eventueel de zaadjes.',
    afbeelding: 'snippets/citroen schijfjes.png'
  },
  {
    id: 'citroen-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Citroen in partjes',
    beschrijving: 'Snijd de citroen in de lengte doormidden. Snijd elke helft nog een keer doormidden. Je hebt nu 4 partjes.',
    afbeelding: 'snippets/citroen-partjes.png'
  },
  {
    id: 'citroen-zeste', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Citroen zeste',
    beschrijving: 'Rasp de gele buitenkant van de schil met een fijne rasp of zesteur. Raak de witte laag niet — die smaakt bitter.',
    afbeelding: 'snippets/citroen-zeste.png'
  },

  // ── Limoen ──
  {
    id: 'limoen-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Limoen in partjes',
    beschrijving: 'Snijd de limoen in de lengte doormidden. Snijd elke helft nog een keer doormidden. Je hebt nu 4 partjes.',
    afbeelding: 'snippets/limoen-partjes.png'
  },
  {
    id: 'limoen-plakjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Limoen in plakjes',
    beschrijving: 'Leg de limoen op zijn kant en snijd hem in ronde plakjes van 5 mm dik. Verwijder eventueel de zaadjes.',
    afbeelding: 'snippets/limoen-plakjes.png'
  },
  {
    id: 'limoen-zeste', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Limoen zeste',
    beschrijving: 'Rasp de groene buitenkant van de schil met een fijne rasp of zesteur. Raak de witte laag niet — die smaakt bitter.',
    afbeelding: 'snippets/limoen-zeste.png'
  },

  // ── Mango ──
  {
    id: 'mango-blokjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Mango in blokjes',
    beschrijving: 'Snijd de vlezige kanten van de pit af. Snijd het vruchtvlees in een ruitpatroon zonder door de schil te snijden. Druk de schil naar buiten en snijd de blokjes eraf.',
    afbeelding: 'snippets/mango-blokjes.png'
  },
  {
    id: 'mango-brunoise', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Mango brunoise',
    beschrijving: 'Snijd de mango van de pit. Snijd het vruchtvlees in plakken van 3 mm. Snijd de plakken in reepjes en dan in kleine blokjes van 3×3 mm.',
    afbeelding: 'snippets/mango-brunoise.png'
  },
  {
    id: 'mango-partjes', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Mango in partjes',
    beschrijving: 'Snijd de vlezige kanten van de pit af. Snijd de schil eraf. Snijd het vruchtvlees in lange partjes.',
    afbeelding: 'snippets/mango-partjes.png'
  },
  {
    id: 'mango-plakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Mango in plakken',
    beschrijving: 'Snijd de vlezige kanten van de pit af. Snijd de schil eraf. Snijd het vruchtvlees in gelijke plakken van 1 cm dik.',
    afbeelding: 'snippets/mango-plakken.png'
  },

  // ── Bakken ──
  {
    id: 'pan-voorverwarmen-olie', categorie: 'Bakken',
    naam: 'Pan voorverwarmen en olie toevoegen',
    beschrijving: 'Zet de pan op middelhoog vuur. Wacht 1–2 minuten tot de pan heet is. Voeg dan de olie toe en swenk de pan zodat de olie gelijkmatig verdeeld is.',
    afbeelding: 'snippets/Pan-voorverwarmenolietoevoegen.png'
  },

  // ── Koken ──
  {
    id: 'ei-koken', categorie: 'Koken',
    naam: 'Ei koken',
    beschrijving: 'Leg het ei voorzichtig in kokend water. Zachtgekookt: 6 min. Halfzacht: 8 min. Hardgekookt: 10 min. Laat daarna schrikken in koud water om het gaarproces te stoppen.',
    afbeelding: 'snippets/ei-koken.png'
  },

  // ── Bereiden ──
  {
    id: 'aardappel-wassen-drogen', categorie: 'Bereiden',
    naam: 'Aardappel wassen en drogen',
    beschrijving: 'Spoel de aardappelen af onder koud stromend water. Wrijf ze schoon en dep ze droog met een theedoek of keukenpapier.',
    afbeelding: 'snippets/aardappel-wassen+drogen.png'
  },
  {
    id: 'aardappel-schillen-blokjes', categorie: 'Bereiden',
    naam: 'Aardappel schillen en in blokjes snijden',
    beschrijving: 'Schil de aardappel met een dunschiller of mes. Snijd de geschilde aardappel daarna in gelijke blokjes van 1–2 cm.',
    afbeelding: 'snippets/aardappel-schil+blokjes.png'
  },
  {
    id: 'ei-schillen-doormiddensnijden', categorie: 'Bereiden',
    naam: 'Ei schillen en doormidden snijden',
    beschrijving: 'Tik het hardgekookte ei voorzichtig op het aanrecht. Pel de schil eraf. Snijd het ei met een scherp mes doormidden.',
    afbeelding: 'snippets/ei-schillendoormiddensnijden.png'
  },
  {
    id: 'gehakt-cajun-wok', categorie: 'Bereiden',
    naam: 'Gehakt bakken met cajunkruiden in wok',
    beschrijving: 'Verhit de wok op hoog vuur. Voeg het gehakt toe en bak het rul. Voeg de cajunkruiden toe en bak nog 1–2 minuten mee.',
    afbeelding: 'snippets/gehakt-bakkenmetcajunkruideninwok.png'
  },
  {
    id: 'kip-inpandoen', categorie: 'Bereiden',
    naam: 'Kip in pan doen',
    beschrijving: 'Verhit olie in de pan op middelhoog vuur. Leg de stukken kip voorzichtig in de hete pan. Zorg dat ze gelijkmatig verdeeld liggen.',
    afbeelding: 'snippets/Kip-inpandoen.png'
  },
  {
    id: 'kip-snijden-marineren', categorie: 'Bereiden',
    naam: 'Kip snijden en marineren',
    beschrijving: 'Snijd de kipfilet in gelijke reepjes of blokjes. Meng met de marinade-ingrediënten en laat minstens 15 minuten intrekken.',
    afbeelding: 'snippets/kip-snijden+marineren.png'
  },
  {
    id: 'kip-bouillon-afblussen', categorie: 'Bereiden',
    naam: 'Kip met bouillon afblussen',
    beschrijving: 'Voeg de bouillon toe aan de pan met kip. Roer de aanbaksels los en laat het geheel even sudderen.',
    afbeelding: 'snippets/kip-bouillon-afblussen.png'
  },
  {
    id: 'kokosmelk-toevoegen-roti', categorie: 'Bereiden',
    naam: 'Kokosmelk toevoegen aan roti',
    beschrijving: 'Voeg de kokosmelk toe aan het mengsel en roer goed door. Laat het op laag vuur inkoken tot de gewenste dikte.',
    afbeelding: 'snippets/kokokmelktoevoegenaanroti.png'
  },
  {
    id: 'rodekidneybonen-tacosaus', categorie: 'Bereiden',
    naam: 'Rode kidneybonen taco-saus',
    beschrijving: 'Giet de bonen af en spoel ze. Voeg ze samen met de taco-saus toe aan een steelpan. Verwarm op middelhoog vuur en roer regelmatig.',
    afbeelding: 'snippets/rodekidneybonen-tacosaus-steelpan.png'
  },
  {
    id: 'roti-serveren', categorie: 'Bereiden',
    naam: 'Roti serveren',
    beschrijving: 'Rol de roti op of vouw hem op en serveer op een bord. Voeg de bijgerechten ernaast of erin.',
    afbeelding: 'snippets/roti-eindproductserveren.png'
  },
  {
    id: 'groenten-toevoegen-pan', categorie: 'Bereiden',
    naam: 'Groenten toevoegen aan pan',
    beschrijving: 'Voeg de gesneden kousenband, sperzieboontjes, aardappelblokjes en tomaat toe aan de pan. Roer goed door en kook tot gaar.',
    afbeelding: 'snippets/toevoegen-gesnedenkousenband-sperzieboontjes-aardappelblokjes-tomaatblokjes.png'
  },
  {
    id: 'ui-knoflook-rodepeper-pan', categorie: 'Bereiden',
    naam: 'Ui, knoflook en rode peper toevoegen',
    beschrijving: 'Voeg de gesneden ui, knoflook en rode peper toe aan de hete pan. Bak op middelhoog vuur tot de ui glazig en zacht is.',
    afbeelding: 'snippets/ui-knoflook-rodepeper-toevoegenaandepan.png'
  },
  {
    id: 'ui-toevoegen-gehakt', categorie: 'Bereiden',
    naam: 'Ui toevoegen aan gehakt',
    beschrijving: 'Voeg de gesneden ui toe aan het aanbakkende gehakt. Roer goed door en bak mee tot de ui zacht en lichtbruin is.',
    afbeelding: 'snippets/ui-toevoegenaangehakt.png'
  },
];
