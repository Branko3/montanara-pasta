export type Lang = 'cnr' | 'en'

export interface NutritionRow {
  label: string
  value: string
  major: boolean
}

export interface TagliatelleItem {
  tag: string
  name: string
  desc: string
  pairings: string[]
}

export interface SpMeta {
  value: string
  label: string
}

export interface B2BPoint {
  value: string
  label: string
}

export interface Translations {
  nav: {
    story: string
    products: string
    nutrition: string
    b2b: string
    contact: string
    menuLabel: string
  }
  hero: {
    eyebrow: string
    h1_1: string
    h1_em: string
    h1_3: string
    lead: string
    cta1: string
    cta2: string
    tagTitle: string
    tagSub: string
    badges: string[]
    swatches: string[]
  }
  about: {
    eyebrow: string
    h2: string
    stamp: string
    p1: string
    p2: string
    quote: string
  }
  products: {
    eyebrow: string
    h2: string
    intro: string
    spKicker: string
    spName: string
    spDesc: string
    spMeta: SpMeta[]
    tgH3: string
    tgLead: string
    tagliatelle: TagliatelleItem[]
  }
  nutrition: {
    eyebrow: string
    h2: string
    sub: string
    tableH1: string
    tableH2: string
    rows: NutritionRow[]
  }
  b2b: {
    eyebrow: string
    h2: string
    p: string
    points: B2BPoint[]
    cta1: string
    cta2: string
  }
  contact: {
    eyebrow: string
    h2: string
    p: string
    phoneLabel: string
    emailLabel: string
    addrLabel: string
    igLabel: string
    addrLine1: string
    addrLine2: string
  }
  footer: {
    links: {
      story: string
      products: string
      b2b: string
      contact: string
    }
    copyright: string
    tagline: string
  }
}

const cnr: Translations = {
  nav: {
    story: 'Naša priča',
    products: 'Proizvodi',
    nutrition: 'Hranjive vrijednosti',
    b2b: 'Za ugostitelje',
    contact: 'Kontakt',
    menuLabel: 'Otvori meni',
  },
  hero: {
    eyebrow: 'Domaća proizvodnja · Podgorica',
    h1_1: 'Svježe.',
    h1_em: 'Domaće.',
    h1_3: 'Naše.',
    lead: 'Montanara je svježa, domaća pašta bez jaja, aditiva i konzervansa. Pravimo je u malim količinama, onako kako se pravila u mediteranskim kuhinjama.',
    cta1: 'Pogledaj proizvode',
    cta2: 'Za restorane i ugostitelje',
    tagTitle: '100% prirodno',
    tagSub: 'bez jaja · bez aditiva',
    badges: [
      'Svježe rađeno',
      'Bez jaja',
      'Bez aditiva i konzervansa',
      'Prirodne boje',
      'Domaća receptura',
    ],
    swatches: ['Klasik', 'Spanać', 'Cvekla', 'Sipa'],
  },
  about: {
    eyebrow: 'Naša priča',
    h2: 'Od brašna i vode, do tanjira.',
    stamp: 'Domaće & svježe',
    p1: 'Montanara je nastala iz jednostavne ideje: svježa pašta ne mora biti komplikovana da bi bila dobra. Tijesto pravimo od Semola di grano duro i vode, bez jaja, bez aditiva i bez ijednog konzervansa.',
    p2: 'Svaka šarža se pravi u malim količinama, pa do vas stiže onoliko svježa koliko i izgleda. Boju ne dobijamo iz bočice. Dolazi iz cvekle, spanaća i crnila sipe, baš onako kako bi je obojila i sama priroda.',
    quote: '„Dobra pašta ne traži mnogo — samo dobre sastojke i da na sto stigne svježa."',
  },
  products: {
    eyebrow: 'Asortiman',
    h2: 'Što sve pravimo',
    intro: 'Za sada u ponudi imamo dvije osnovne forme: špagete i taljatele. A taljatele dolaze u tri prirodne boje.',
    spKicker: 'Klasik',
    spName: 'Špagete',
    spDesc: 'Tanke, svilenkaste i savršeno elastične. Naše svježe špagete kuvaju se za svega 2–3 minuta i lijepo prihvataju svaki sos, od jednostavnog pelata i bosiljka do bogatijih preliva.',
    spMeta: [
      { value: '2–3 min', label: 'Vrijeme kuvanja' },
      { value: 'Semola', label: 'di grano duro' },
      { value: 'Bez jaja', label: 'Svježe tijesto' },
    ],
    tgH3: 'Taljatele u tri boje',
    tgLead: 'Široke trake domaćeg tijesta. Ista je receptura, a svaka boja nosi svoj prirodni sastojak i svoj karakter na tanjiru.',
    tagliatelle: [
      {
        tag: 'Zelena · spanać',
        name: 'Taljatele sa spanaćem',
        desc: 'Nježna zelena boja i blag, svjež ukus. Lijepo ide uz maslinovo ulje, bijeli sir i lagane povrtne sosove.',
        pairings: ['Maslinovo ulje', 'Bijeli sir', 'Lagani povrtni sosovi'],
      },
      {
        tag: 'Crvena · cvekla',
        name: 'Taljatele sa cveklom',
        desc: 'Topla crvena nijansa i diskretno slatkast, zemljan ton. Efektne na tanjiru i odlične uz kremaste i sosove od sira.',
        pairings: ['Kremasti sosovi', 'Sosovi od sira', 'Bogati prelivi'],
      },
      {
        tag: 'Crna · sipa',
        name: 'Taljatele sa crnilom sipe',
        desc: 'Duboka crna boja i suptilan morski ton. Stvorene su za plodove mora, od škampa do bijelog vina i češnjaka.',
        pairings: ['Škampi', 'Bijelo vino i češnjak', 'Plodovi mora'],
      },
    ],
  },
  nutrition: {
    eyebrow: 'Transparentno',
    h2: 'Hranjive vrijednosti',
    sub: 'Sve što je u našoj pašti, piše i na deklaraciji. Bez skrivenih dodataka, samo tijesto kakvo treba da bude.',
    tableH1: 'Prosječna vrijednost',
    tableH2: 'na 100 g',
    rows: [
      { label: 'Energetska vrijednost', value: '243 kcal / 1033 kJ', major: true },
      { label: 'Masti', value: '0,7 g', major: false },
      { label: '— zasićene masne kiseline', value: '0 g', major: false },
      { label: 'Ugljeni hidrati', value: '50,4 g', major: true },
      { label: '— šećeri', value: '2,1 g', major: false },
      { label: 'Dijetalna vlakna', value: '1,75 g', major: false },
      { label: 'Bjelančevine', value: '8,05 g', major: true },
      { label: 'So', value: '17,5 mg', major: false },
    ],
  },
  b2b: {
    eyebrow: 'Za restorane i ugostitelje',
    h2: 'Svježa pašta na vašem meniju.',
    p: 'Tražite domaću paštu koja gostima ostaje u sjećanju? Montanara isporučuje svježe rađene špagete i taljatele restoranima, konobama i ugostiteljskim objektima. Dogovaramo količine, dinamiku isporuke i izbor boja prema vašoj kuhinji.',
    points: [
      { value: 'Svježe', label: 'rađeno po narudžbi' },
      { value: '3 boje', label: 'taljatela na izbor' },
      { value: 'Lokalno', label: 'iz Podgorice' },
    ],
    cta1: 'Pozovi za ponudu',
    cta2: 'Pošalji upit na e-mail',
  },
  contact: {
    eyebrow: 'Kontakt',
    h2: 'Javite nam se',
    p: 'Za narudžbe, saradnju i sve što vas zanima, tu smo.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    addrLabel: 'Adresa',
    igLabel: 'Instagram',
    addrLine1: 'Ul. Milana Raičkovića 26',
    addrLine2: 'Podgorica, Crna Gora',
  },
  footer: {
    links: {
      story: 'Naša priča',
      products: 'Proizvodi',
      b2b: 'Za ugostitelje',
      contact: 'Kontakt',
    },
    copyright: 'Montanara · Svježa domaća pašta · Podgorica',
    tagline: 'Bez jaja · Bez aditiva i konzervansa',
  },
}

const en: Translations = {
  nav: {
    story: 'Our story',
    products: 'Products',
    nutrition: 'Nutrition',
    b2b: 'For restaurants',
    contact: 'Contact',
    menuLabel: 'Open menu',
  },
  hero: {
    eyebrow: 'Homemade in Podgorica',
    h1_1: 'Fresh.',
    h1_em: 'Homemade.',
    h1_3: 'Ours.',
    lead: 'Montanara is fresh, homemade pasta with no eggs, additives or preservatives. We make it in small batches, the way it has always been made in Mediterranean kitchens.',
    cta1: 'See the range',
    cta2: 'For restaurants & catering',
    tagTitle: '100% natural',
    tagSub: 'no eggs · no additives',
    badges: [
      'Freshly made',
      'No eggs',
      'No additives or preservatives',
      'Natural colours',
      'Homemade recipe',
    ],
    swatches: ['Classic', 'Spinach', 'Beetroot', 'Squid ink'],
  },
  about: {
    eyebrow: 'Our story',
    h2: 'From flour and water, to the plate.',
    stamp: 'Fresh & homemade',
    p1: "Montanara grew out of one simple idea: fresh pasta doesn't have to be complicated to be good. We make the dough from Semola di grano duro and water, with no eggs, no additives and not a single preservative.",
    p2: 'Every batch is made in small quantities, so it reaches you as fresh as it looks. The colour doesn\'t come from a bottle. It comes from beetroot, spinach and cuttlefish ink, exactly the way nature would colour it.',
    quote: '"Good pasta doesn\'t ask for much — just good ingredients, and to reach the table fresh."',
  },
  products: {
    eyebrow: 'Our range',
    h2: 'What we make',
    intro: 'For now we offer two shapes: spaghetti and tagliatelle. And the tagliatelle comes in three natural colours.',
    spKicker: 'Classic',
    spName: 'Spaghetti',
    spDesc: 'Thin, silky and perfectly springy. Our fresh spaghetti cooks in just 2–3 minutes and carries any sauce beautifully, from a simple tomato and basil to richer dressings.',
    spMeta: [
      { value: '2–3 min', label: 'Cooking time' },
      { value: 'Semola', label: 'di grano duro' },
      { value: 'No eggs', label: 'Fresh dough' },
    ],
    tgH3: 'Tagliatelle in three colours',
    tgLead: 'Wide ribbons of homemade dough. Same recipe, but each colour carries its own natural ingredient and its own character on the plate.',
    tagliatelle: [
      {
        tag: 'Green · spinach',
        name: 'Spinach tagliatelle',
        desc: 'A gentle green colour and a mild, fresh taste. Lovely with olive oil, white cheese and light vegetable sauces.',
        pairings: ['Olive oil', 'White cheese', 'Light vegetable sauces'],
      },
      {
        tag: 'Red · beetroot',
        name: 'Beetroot tagliatelle',
        desc: 'A warm red hue and a subtly sweet, earthy note. Striking on the plate and great with creamy, cheesy sauces.',
        pairings: ['Creamy sauces', 'Cheese sauces', 'Rich dressings'],
      },
      {
        tag: 'Black · cuttlefish',
        name: 'Cuttlefish-ink tagliatelle',
        desc: 'A deep black colour and a subtle taste of the sea. Made for seafood, from prawns to white wine and garlic.',
        pairings: ['Prawns', 'White wine & garlic', 'Seafood'],
      },
    ],
  },
  nutrition: {
    eyebrow: 'Transparent',
    h2: 'Nutrition facts',
    sub: "Everything that's in our pasta is on the label. No hidden extras, just dough the way it should be.",
    tableH1: 'Average value',
    tableH2: 'per 100 g',
    rows: [
      { label: 'Energy', value: '243 kcal / 1033 kJ', major: true },
      { label: 'Fat', value: '0.7 g', major: false },
      { label: '— of which saturates', value: '0 g', major: false },
      { label: 'Carbohydrate', value: '50.4 g', major: true },
      { label: '— of which sugars', value: '2.1 g', major: false },
      { label: 'Fibre', value: '1.75 g', major: false },
      { label: 'Protein', value: '8.05 g', major: true },
      { label: 'Salt', value: '17.5 mg', major: false },
    ],
  },
  b2b: {
    eyebrow: 'For restaurants & catering',
    h2: 'Fresh pasta on your menu.',
    p: 'Looking for homemade pasta your guests will remember? Montanara supplies freshly made spaghetti and tagliatelle to restaurants, taverns and catering kitchens. We agree on quantities, delivery schedule and the choice of colours to suit your kitchen.',
    points: [
      { value: 'Fresh', label: 'made to order' },
      { value: '3 colours', label: 'of tagliatelle' },
      { value: 'Local', label: 'from Podgorica' },
    ],
    cta1: 'Call for a quote',
    cta2: 'Send an email',
  },
  contact: {
    eyebrow: 'Contact',
    h2: 'Get in touch',
    p: "For orders, partnerships and anything else, we're here.",
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addrLabel: 'Address',
    igLabel: 'Instagram',
    addrLine1: 'Milana Raičkovića 26',
    addrLine2: 'Podgorica, Montenegro',
  },
  footer: {
    links: {
      story: 'Our story',
      products: 'Products',
      b2b: 'For restaurants',
      contact: 'Contact',
    },
    copyright: 'Montanara · Fresh homemade pasta · Podgorica',
    tagline: 'No eggs · No additives or preservatives',
  },
}

export const translations: Record<Lang, Translations> = { cnr, en }
