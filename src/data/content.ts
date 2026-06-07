export type Locale = 'en' | 'da';

export interface NavItem {
  href: string;
  label: string;
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface Fact {
  label: string;
  detail: string;
}

export interface Entry {
  title: string;
  meta?: string;
  year?: string;
  tag?: string;
  links?: LinkRef[];
}

export interface MediaGroup {
  head: string;
  items: Entry[];
}

export interface PageContent {
  htmlLang: string;
  meta: { title: string; description: string };
  langAria: string;
  nav: NavItem[];
  hero: { taglineRows: string[][] };
  about: {
    label: string;
    heading: string;
    body: string[];
    timelineHead: string;
    timeline: Fact[];
  };
  mission: { label: string; statement: string };
  speaking: {
    label: string;
    heading: string;
    lead: string;
    body: string;
    questionsIntro: string;
    questions: string[];
    ctaText: string;
  };
  recognition: { label: string; heading: string; awards: Entry[] };
  media: { label: string; heading: string; groups: MediaGroup[] };
  contact: {
    label: string;
    heading: string;
    lead: string;
    email: string;
    links: LinkRef[];
  };
}

const scholar = 'https://scholar.google.com/citations?user=s-0BmrMAAAAJ&hl=en';

export const content: Record<Locale, PageContent> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Lotte Bjerre Knudsen — Scientist & Keynote Speaker',
      description:
        'Lotte Bjerre Knudsen — the scientist whose three decades of work helped unlock the GLP-1 medicines reshaping how the world treats obesity and diabetes. Scientist, communicator, and keynote speaker.',
    },
    langAria: 'Language',
    nav: [
      { href: '#about', label: 'About' },
      { href: '#mission', label: 'Mission' },
      { href: '#recognition', label: 'Awards' },
      { href: '#media', label: 'Media' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      taglineRows: [
        ['Life Sciences Innovator', 'Inventor'],
        ['Key Opinion Leader', 'Keynote Speaker'],
      ],
    },
    about: {
      label: 'About',
      heading: 'About Lotte',
      body: [
        'My three decades of persistence helped unlock a new class of medicines.',
        'I joined Novo Nordisk in 1989, first working on enzymes for laundry detergents before moving into diabetes research and the family of molecules that would define my career: GLP-1 receptor agonists.',
        'I led the team that developed liraglutide, approved as Victoza in 2010, and oversaw the development of semaglutide, which became Ozempic in 2017 and Wegovy in 2021. What began as the search for a better diabetes medicine ended up changing how obesity is treated.',
        'I hold a DMSc from the University of Copenhagen and was adjunct professor of translational medicine at Aarhus University from 2015 to 2020. After more than thirty years at Novo Nordisk, I am now turning to what comes next. In scientific circles I am known as “The Lady in Pink”.',
      ],
      timelineHead: 'Timeline',
      timeline: [
        { label: 'Chemical Engineering, Technical University of Denmark', detail: '' },
        { label: 'Joined Novo Nordisk', detail: '1989' },
        { label: 'Victoza (liraglutide) approved', detail: '2010' },
        { label: 'DMSc, University of Copenhagen', detail: '2014' },
        { label: 'Adjunct Professor, Aarhus University', detail: '2015–2020' },
        { label: 'Ozempic (semaglutide) approved', detail: '2017' },
        { label: 'Wegovy (semaglutide) approved', detail: '2021' },
      ],
    },
    mission: {
      label: 'My Mission',
      statement:
        'Having helped unlock one of medicine’s most transformative discoveries, my mission is to use that platform — as a scientist, communicator, and leader — to confront the world’s addiction crisis, starting with food and extending to alcohol, drugs, and the digital world, and to inspire the next generation of scientists and leaders to take the science further than we ever imagined possible.',
    },
    speaking: {
      label: 'Speaking',
      heading: 'Invite Lotte to speak',
      lead: 'Lotte is an internationally recognised keynote speaker who speaks with great passion and knowledge — and always leaves her audiences both wiser and happier.',
      body: 'From the first experiments in the laboratory to medicines now changing the world, Lotte has been part of the entire journey. Talks are tailored to each audience — more or less formal, more or less scientific — so they work just as well for those new to the subject as for specialists.',
      questionsIntro: 'A talk can take you inside:',
      questions: [
        'The biology and history behind these medicines — and how and why they actually work.',
        'How you work patiently on something for decades without ever losing motivation or passion.',
        'How you keep dreaming about solutions to the world’s biggest problems.',
        'Why, in scientific circles, Lotte is known as “The Lady in Pink”.',
      ],
      ctaText: 'Write to book Lotte',
    },
    recognition: {
      label: 'Awards',
      heading: 'Honoured across medicine and science',
      awards: [
        {
          year: '2026',
          title: 'Cameron Prize for Therapeutics',
          meta: 'University of Edinburgh',
          links: [
            {
              label: 'Announcement',
              href: 'https://web.archive.org/web/20260309215102/https://www.ed.ac.uk/news/trio-honoured-for-transformational-obesity-treatment',
            },
          ],
        },
        {
          year: '2025',
          title: 'Breakthrough Prize in Life Sciences',
          meta: 'Breakthrough Prize Foundation',
          links: [
            { label: 'Laureate', href: 'https://breakthroughprize.org/Laureates/L3974' },
            { label: 'Ceremony', href: 'https://breakthroughprize.org/Ceremonies/11' },
            { label: 'Film', href: 'https://www.youtube.com/watch?v=gSPuYhmHtXA' },
          ],
        },
        {
          year: '2025',
          title: 'Friends of the National Libraries Award',
          meta: 'FNLM Annual Gala',
          links: [{ label: 'Film', href: 'https://www.fnlm.org/2025-fnlm-annual-gala/' }],
        },
        {
          year: '2025',
          title: 'Lifetime Achievement Award',
          meta: 'Stanford University',
          links: [
            {
              label: 'Lecture',
              href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
            },
          ],
        },
        {
          year: '2024',
          title: 'Lasker~DeBakey Clinical Medical Research Award',
          meta: 'Lasker Foundation · shared with Svetlana Mojsov and Joel Habener',
          links: [
            {
              label: 'Citation',
              href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/',
            },
            {
              label: 'Acceptance remarks',
              href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/#remarks',
            },
          ],
        },
        {
          year: '2024',
          title: 'Mani L. Bhaumik Breakthrough of the Year Award',
          meta: 'Science / AAAS',
          links: [
            {
              label: 'Announcement',
              href: 'https://www.aaas.org/news/innovators-glp-1-obesity-bhaumik-breakthrough',
            },
          ],
        },
        {
          year: '2024',
          title: 'Golden Plate Award',
          meta: 'American Academy of Achievement',
          links: [{ label: 'Summit gallery', href: 'https://achievement.org/summit/2024/#gallery' }],
        },
        {
          year: '2024',
          title: 'Fierce 50',
          meta: 'Fierce Pharma',
          links: [
            { label: 'Interview', href: 'https://www.fiercepharma.com/pharma/lotte-bjerre-knudsen' },
          ],
        },
        {
          year: '2023',
          title: 'Paul Langerhans Medal',
          meta: 'German Diabetes Society (DDG)',
        },
        {
          year: '2023',
          title: 'STAT Biomedical Innovation Award',
          meta: 'STAT',
        },
      ],
    },
    media: {
      label: 'Media',
      heading: 'In print, on film, and on air',
      groups: [
        {
          head: 'Press & portraits',
          items: [
            {
              title: '60 Minutes',
              meta: 'CBS — the GLP-1 story',
              tag: 'Television',
              links: [{ label: 'Watch', href: 'https://www.youtube.com/watch?v=oHI1Dkqdujc' }],
            },
            {
              title: 'Monocle',
              meta: 'The scientist behind the weight-loss jabs',
              tag: 'Magazine',
              links: [
                {
                  label: 'Read',
                  href: 'https://monocle.com/affairs/health/ozempic-wegovy-weight-loss-jabs-glp1-scientist-novo-nordisk/',
                },
              ],
            },
            {
              title: 'Der Spiegel',
              meta: 'Interview with the inventor of the weight-loss drugs',
              tag: 'Interview',
              links: [
                {
                  label: 'Read',
                  href: 'https://www.spiegel.de/international/business/interview-with-weight-loss-drugs-inventor-lotte-bjerre-knudsen-a-f2815950-ff24-4e87-b7e9-b6d6c1982d57',
                },
              ],
            },
          ],
        },
        {
          head: 'Film & podcasts',
          items: [
            {
              title: 'The Story of GLP-1',
              meta: 'Novo Nordisk Foundation · a four-part film series',
              tag: 'Film',
              links: [
                {
                  label: 'Episode 1',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-diabetes-doctors-dream-episode-1/',
                },
                {
                  label: 'Episode 2',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-if-you-dont-fix-this-episode-2/',
                },
                {
                  label: 'Episode 3',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-steak-well-done-episode-3/',
                },
                {
                  label: 'Episode 4',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-the-next-really-good-idea-episode-4/',
                },
              ],
            },
            {
              title: 'Acquired',
              meta: 'The scientific journey behind Ozempic',
              tag: 'Podcast',
              links: [
                {
                  label: 'ACQ2 interview',
                  href: 'https://www.acquired.fm/acq2-episodes/the-scientific-journey-behind-ozempic-with-lotte-bjerre-knudsen-novo-nordisks-chief-scientific-advisor',
                },
                {
                  label: 'Novo Nordisk episode',
                  href: 'https://www.acquired.fm/episodes/novo-nordisk-ozempic',
                },
              ],
            },
            {
              title: 'Shivering with Curiosity',
              meta: 'American Academy of Achievement',
              tag: 'Podcast',
              links: [
                {
                  label: 'Listen',
                  href: 'https://podcasts.apple.com/us/podcast/lotte-bjerre-knudsen-shivering-with-curiosity/id1025864075?i=1000714989363',
                },
              ],
            },
            {
              title: 'Ground Truths — Eric Topol',
              meta: 'The scientist behind the GLP-1 drugs',
              tag: 'Podcast',
              links: [
                {
                  label: 'Listen',
                  href: 'https://erictopol.substack.com/p/lotte-bjerre-knudsen-the-scientist',
                },
              ],
            },
            {
              title: 'Mother of Molecules',
              meta: 'On the discovery of GLP-1',
              tag: 'Podcast',
              links: [
                { label: 'Listen', href: 'https://open.spotify.com/episode/63BSiJujEVUfz9BQRPSR2O' },
              ],
            },
          ],
        },
        {
          head: 'Talks & research',
          items: [
            {
              year: '2026',
              title: 'AGM Webinar Series',
              meta: 'NIH · National Center for Advancing Translational Sciences',
              tag: 'Lecture',
              links: [
                {
                  label: 'Series',
                  href: 'https://sites.google.com/ncats.nih.gov/agm-webinar-series/2026-webinars',
                },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=nX0QAlql8O4' },
              ],
            },
            {
              year: '2025',
              title: 'Stanford Drug Discovery Symposium',
              meta: 'Lifetime Achievement Award lecture',
              tag: 'Lecture',
              links: [
                {
                  label: 'Recordings',
                  href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
                },
              ],
            },
            {
              title: 'Google Scholar',
              meta: 'Peer-reviewed publications and citations',
              tag: 'Profile',
              links: [{ label: 'View profile', href: scholar }],
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      heading: 'Get in touch',
      lead: 'For speaking, advisory, and research enquiries, write to Lotte’s office.',
      email: 'PA@lottebjerreknudsen.com',
      links: [{ label: 'Google Scholar', href: scholar }],
    },
  },

  da: {
    htmlLang: 'da',
    meta: {
      title: 'Lotte Bjerre Knudsen — Forsker & Foredragsholder',
      description:
        'Lotte Bjerre Knudsen — forskeren, hvis tre årtiers arbejde var med til at åbne for GLP-1-lægemidlerne, der ændrer behandlingen af fedme og diabetes verden over. Forsker, formidler og foredragsholder.',
    },
    langAria: 'Sprog',
    nav: [
      { href: '#about', label: 'Om' },
      { href: '#mission', label: 'Mission' },
      { href: '#recognition', label: 'Priser' },
      { href: '#media', label: 'Medier' },
      { href: '#contact', label: 'Kontakt' },
    ],
    hero: {
      taglineRows: [
        ['Forsker i life science', 'Opfinder'],
        ['Key opinion leader', 'Keynote-speaker'],
      ],
    },
    about: {
      label: 'Om',
      heading: 'Om Lotte',
      body: [
        'Mine tre årtiers vedholdenhed var med til at åbne for en ny klasse af lægemidler.',
        'Jeg startede hos Novo Nordisk i 1989 og arbejdede i begyndelsen med enzymer til vaskemiddel, inden jeg gik over i diabetesforskningen og den molekylfamilie, der kom til at definere min karriere: GLP-1-receptoragonister.',
        'Jeg stod i spidsen for det team, der udviklede liraglutid — godkendt som Victoza i 2010 — og var med til at lede udviklingen af semaglutid, der blev til Ozempic i 2017 og Wegovy i 2021. Det, der begyndte som jagten på et bedre diabeteslægemiddel, endte med at ændre måden, fedme behandles på.',
        'Jeg har en doktorgrad (DMSc) fra Københavns Universitet og var adjungeret professor i translationel medicin ved Aarhus Universitet fra 2015 til 2020. Efter mere end tredive år hos Novo Nordisk retter jeg nu blikket mod det, der kommer næste. I videnskabelige kredse er jeg kendt som “The Lady in Pink”.',
      ],
      timelineHead: 'Tidslinje',
      timeline: [
        { label: 'Kemiingeniøruddannelse, Danmarks Tekniske Universitet', detail: '' },
        { label: 'Startede hos Novo Nordisk', detail: '1989' },
        { label: 'Victoza (liraglutid) godkendt', detail: '2010' },
        { label: 'DMSc, Københavns Universitet', detail: '2014' },
        { label: 'Adjungeret professor, Aarhus Universitet', detail: '2015–2020' },
        { label: 'Ozempic (semaglutid) godkendt', detail: '2017' },
        { label: 'Wegovy (semaglutid) godkendt', detail: '2021' },
      ],
    },
    mission: {
      label: 'Min mission',
      statement:
        'Efter at have været med til at åbne for en af medicinens mest skelsættende opdagelser er det min mission at bruge den platform — som forsker, formidler og leder — til at tage kampen op mod verdens afhængighedskrise: først maden, dernæst alkohol, stoffer og den digitale verden. Og at inspirere den næste generation af forskere og ledere til at føre videnskaben længere, end vi nogensinde troede muligt.',
    },
    speaking: {
      label: 'Foredrag',
      heading: 'Book Lotte til et foredrag',
      lead: 'Lotte er en internationalt anerkendt foredragsholder, der taler med stor passion og viden — og efterlader sit publikum både klogere og gladere.',
      body: 'Fra de første forsøg i laboratoriet til de lægemidler, der i dag forandrer verden, har Lotte været med hele vejen. Foredragene tilpasses det enkelte publikum — mere eller mindre formelle, mere eller mindre videnskabelige — så de også er for dig, der ikke kender emnet i forvejen.',
      questionsIntro: 'Et foredrag kan tage dig med ind i:',
      questions: [
        'Biologien og historien bag lægemidlerne — og hvordan og hvorfor de egentlig virker.',
        'Hvordan man arbejder tålmodigt med noget i årtier uden at miste motivationen eller passionen.',
        'Hvordan man bliver ved med at drømme om løsninger på verdens største problemer.',
        'Hvorfor Lotte i videnskabelige kredse er kendt som “The Lady in Pink”.',
      ],
      ctaText: 'Skriv for at booke Lotte',
    },
    recognition: {
      label: 'Priser',
      heading: 'Anerkendt på tværs af medicin og videnskab',
      awards: [
        {
          year: '2026',
          title: 'Cameron Prize for Therapeutics',
          meta: 'University of Edinburgh',
          links: [
            {
              label: 'Omtale',
              href: 'https://web.archive.org/web/20260309215102/https://www.ed.ac.uk/news/trio-honoured-for-transformational-obesity-treatment',
            },
          ],
        },
        {
          year: '2025',
          title: 'Breakthrough Prize in Life Sciences',
          meta: 'Breakthrough Prize Foundation',
          links: [
            { label: 'Modtager', href: 'https://breakthroughprize.org/Laureates/L3974' },
            { label: 'Ceremoni', href: 'https://breakthroughprize.org/Ceremonies/11' },
            { label: 'Film', href: 'https://www.youtube.com/watch?v=gSPuYhmHtXA' },
          ],
        },
        {
          year: '2025',
          title: 'Friends of the National Libraries Award',
          meta: 'FNLM Annual Gala',
          links: [{ label: 'Film', href: 'https://www.fnlm.org/2025-fnlm-annual-gala/' }],
        },
        {
          year: '2025',
          title: 'Lifetime Achievement Award',
          meta: 'Stanford University',
          links: [
            {
              label: 'Foredrag',
              href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
            },
          ],
        },
        {
          year: '2024',
          title: 'Lasker~DeBakey Clinical Medical Research Award',
          meta: 'Lasker Foundation · sammen med Svetlana Mojsov og Joel Habener',
          links: [
            {
              label: 'Begrundelse',
              href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/',
            },
            {
              label: 'Takketale',
              href: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/#remarks',
            },
          ],
        },
        {
          year: '2024',
          title: 'Mani L. Bhaumik Breakthrough of the Year Award',
          meta: 'Science / AAAS',
          links: [
            {
              label: 'Omtale',
              href: 'https://www.aaas.org/news/innovators-glp-1-obesity-bhaumik-breakthrough',
            },
          ],
        },
        {
          year: '2024',
          title: 'Golden Plate Award',
          meta: 'American Academy of Achievement',
          links: [{ label: 'Galleri', href: 'https://achievement.org/summit/2024/#gallery' }],
        },
        {
          year: '2024',
          title: 'Fierce 50',
          meta: 'Fierce Pharma',
          links: [
            { label: 'Interview', href: 'https://www.fiercepharma.com/pharma/lotte-bjerre-knudsen' },
          ],
        },
        {
          year: '2023',
          title: 'Paul Langerhans-medaljen',
          meta: 'Deutsche Diabetes Gesellschaft (DDG)',
        },
        {
          year: '2023',
          title: 'STAT Biomedical Innovation Award',
          meta: 'STAT',
        },
      ],
    },
    media: {
      label: 'Medier',
      heading: 'På tryk, på film og i æteren',
      groups: [
        {
          head: 'Presse og portrætter',
          items: [
            {
              title: '60 Minutes',
              meta: 'CBS — historien om GLP-1',
              tag: 'Tv',
              links: [{ label: 'Se', href: 'https://www.youtube.com/watch?v=oHI1Dkqdujc' }],
            },
            {
              title: 'Monocle',
              meta: 'Forskeren bag vægttabsmidlerne',
              tag: 'Magasin',
              links: [
                {
                  label: 'Læs',
                  href: 'https://monocle.com/affairs/health/ozempic-wegovy-weight-loss-jabs-glp1-scientist-novo-nordisk/',
                },
              ],
            },
            {
              title: 'Der Spiegel',
              meta: 'Interview med opfinderen af vægttabsmidlerne',
              tag: 'Interview',
              links: [
                {
                  label: 'Læs',
                  href: 'https://www.spiegel.de/international/business/interview-with-weight-loss-drugs-inventor-lotte-bjerre-knudsen-a-f2815950-ff24-4e87-b7e9-b6d6c1982d57',
                },
              ],
            },
          ],
        },
        {
          head: 'Film og podcasts',
          items: [
            {
              title: 'The Story of GLP-1',
              meta: 'Novo Nordisk Fonden · en filmserie i fire dele',
              tag: 'Film',
              links: [
                {
                  label: 'Afsnit 1',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-diabetes-doctors-dream-episode-1/',
                },
                {
                  label: 'Afsnit 2',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-if-you-dont-fix-this-episode-2/',
                },
                {
                  label: 'Afsnit 3',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-a-steak-well-done-episode-3/',
                },
                {
                  label: 'Afsnit 4',
                  href: 'https://novonordiskfonden.dk/en/video/the-story-of-glp-1-the-next-really-good-idea-episode-4/',
                },
              ],
            },
            {
              title: 'Jagten på det evige liv',
              meta: 'DR · fra idé til verdenssucces',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://www.dr.dk/lyd/special-radio/jagten-paa-det-evige-liv/jagten-paa-det-evige-liv-2/fra-ide-til-verdenssucces-lotte-bjerre-knudsen-om-glp-1-revolutionen-16122593024',
                },
              ],
            },
            {
              title: 'Hjernekassen på P1',
              meta: 'DR P1 · om GLP-1',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://www.dr.dk/lyd/p1/hjernekassen-paa-p1/hjernekassen-paa-p1-2025/glp-1-11032522242',
                },
              ],
            },
            {
              title: 'Acquired',
              meta: 'Den videnskabelige rejse bag Ozempic',
              tag: 'Podcast',
              links: [
                {
                  label: 'ACQ2-interview',
                  href: 'https://www.acquired.fm/acq2-episodes/the-scientific-journey-behind-ozempic-with-lotte-bjerre-knudsen-novo-nordisks-chief-scientific-advisor',
                },
                {
                  label: 'Novo Nordisk-afsnit',
                  href: 'https://www.acquired.fm/episodes/novo-nordisk-ozempic',
                },
              ],
            },
            {
              title: 'Shivering with Curiosity',
              meta: 'American Academy of Achievement',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://podcasts.apple.com/us/podcast/lotte-bjerre-knudsen-shivering-with-curiosity/id1025864075?i=1000714989363',
                },
              ],
            },
            {
              title: 'Ground Truths — Eric Topol',
              meta: 'Forskeren bag GLP-1-lægemidlerne',
              tag: 'Podcast',
              links: [
                {
                  label: 'Lyt',
                  href: 'https://erictopol.substack.com/p/lotte-bjerre-knudsen-the-scientist',
                },
              ],
            },
            {
              title: 'Mother of Molecules',
              meta: 'Om opdagelsen af GLP-1',
              tag: 'Podcast',
              links: [
                { label: 'Lyt', href: 'https://open.spotify.com/episode/63BSiJujEVUfz9BQRPSR2O' },
              ],
            },
          ],
        },
        {
          head: 'Foredrag og forskning',
          items: [
            {
              year: '2026',
              title: 'AGM Webinar Series',
              meta: 'NIH · National Center for Advancing Translational Sciences',
              tag: 'Foredrag',
              links: [
                {
                  label: 'Serie',
                  href: 'https://sites.google.com/ncats.nih.gov/agm-webinar-series/2026-webinars',
                },
                { label: 'Film', href: 'https://www.youtube.com/watch?v=nX0QAlql8O4' },
              ],
            },
            {
              year: '2025',
              title: 'Stanford Drug Discovery Symposium',
              meta: 'Foredrag ved Lifetime Achievement Award',
              tag: 'Foredrag',
              links: [
                {
                  label: 'Optagelser',
                  href: 'https://med.stanford.edu/cvi/events/sdds2025-stanford-drug-discovery-symposium/2025-day2-event-recordings.html',
                },
              ],
            },
            {
              title: 'Google Scholar',
              meta: 'Peer-reviewede publikationer og citationer',
              tag: 'Profil',
              links: [{ label: 'Se profil', href: scholar }],
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      heading: 'Kom i kontakt',
      lead: 'For foredrag, rådgivning og forskningshenvendelser, skriv til Lottes kontor.',
      email: 'PA@lottebjerreknudsen.com',
      links: [{ label: 'Google Scholar', href: scholar }],
    },
  },
};
