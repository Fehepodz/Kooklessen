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
    id: 'ui-snipperen', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Ui snipperen',
    beschrijving: 'Schil de ui en snijd hem doormidden. Leg de platte kant op het snijplank. Snijd dunne reepjes in de lengterichting zonder helemaal door te snijden. Draai 90° en snijd dwars erdoorheen in kleine gelijke stukjes.',
    afbeelding: 'snippets/ui-snipperen.jpg'
  },
  {
    id: 'knoflook-hakken', categorie: 'Etenswaren', subcategorie: 'Groente & fruit',
    naam: 'Knoflook hakken',
    beschrijving: 'Verwijder de papierachtige schil. Druk het teentje plat met de zijkant van je mes. Snijd in dunne plakjes, verzamel ze en hak ze fijn met een wiegbeweging.',
    afbeelding: 'snippets/knoflook-hakken.jpg'
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
  {
    id: 'ui-fruiten', categorie: 'Bakken',
    naam: 'Ui fruiten',
    beschrijving: 'Verhit een scheutje olie op middelhoog vuur. Voeg de gesnipperde ui toe en roer regelmatig. Na ongeveer 5 minuten is de ui glazig en lichtgeel van kleur — dan is hij gaar.',
    afbeelding: 'snippets/ui-fruiten.jpg'
  },
  {
    id: 'vlees-aanbraden', categorie: 'Bakken',
    naam: 'Vlees aanbraden',
    beschrijving: 'Dep het vlees droog met keukenpapier. Verhit olie in een hete pan. Leg het vlees neer en raak het NIET aan. Pas keren als het vlees vanzelf loslaat van de pan (±2–3 min per kant).',
    afbeelding: 'snippets/vlees-aanbraden.jpg'
  },
  {
    id: 'dressing-maken', categorie: 'Bereiden',
    naam: 'Vinaigrette maken',
    beschrijving: 'Klop azijn, mosterd, zout en peper samen in een kom. Voeg olie langzaam in een dunne straal toe terwijl je blijft kloppen totdat een gebonden dressing ontstaat (verhouding 1:3 azijn:olie).',
    afbeelding: 'snippets/dressing-maken.jpg'
  },
  {
    id: 'deeg-kneden', categorie: 'Bereiden',
    naam: 'Deeg kneden',
    beschrijving: 'Duw het deeg van je af met de hak van je hand. Vouw het naar je toe en draai 90°. Herhaal 8–10 minuten totdat het deeg glad, soepel en elastisch aanvoelt.',
    afbeelding: 'snippets/deeg-kneden.jpg'
  },
  {
    id: 'handen-wassen', categorie: 'Hygiëne',
    naam: 'Handen wassen',
    beschrijving: 'Was handen minimaal 20 seconden met zeep: palmen, ruggen, tussen de vingers en onder de nagels. Spoel goed af en droog met een schone doek. Doe dit voor én na het werken met voedsel.',
    afbeelding: 'snippets/handen-wassen.jpg'
  },
  {
    id: 'werkplek-inrichten', categorie: 'Hygiëne',
    naam: 'Werkplek schoonmaken',
    beschrijving: 'Reinig het snijplank, het aanrecht en de materialen vóór gebruik. Gebruik aparte snijplanken voor vlees en groenten. Zorg dat alles droog en vrij van etensresten is.',
    afbeelding: 'snippets/werkplek.jpg'
  }
];
