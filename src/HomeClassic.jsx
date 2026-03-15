import {
  Bone,
  Facebook,
  Instagram,
  Search,
  ShoppingBag,
  Twitter,
  UserRound,
  PawPrint,
} from 'lucide-react'

const products = [
  {
    name: 'Laisse Sauge',
    category: 'LAISSE',
    price: '89€',
    image: '/laisse.jpg',
  },
  {
    name: 'Snood Velours',
    category: 'SNOOD',
    price: '49€',
    image: '/snood.jpg',
  },
  {
    name: 'Collier Rivage',
    category: 'COLLIER',
    price: '64€',
    image: '/collier.jpg',
  },
  {
    name: 'Harnais Atelier',
    category: 'HARNAIS',
    price: '124€',
    image: '/harnais.jpg',
  },
]

const gang = [
  {
    identity: 'Luna · Paris',
    stars: '★★★★★',
    review:
      "\"Le harnais est canon et surtout super confortable. Luna court partout sans gêne, et tout le monde nous demande d'où il vient.\"",
    product: 'Harnais Atelier',
    image: '/harnais.jpg',
    cta: '#D4A373',
  },
  {
    identity: 'Milo · Lyon',
    stars: '★★★★★',
    review:
      "\"Le bandana tient bien en place et la matière est top. On l'a pris pour les sorties du week-end et il ne le quitte plus.\"",
    product: 'Snood Velours',
    image: '/snood.jpg',
    cta: '#2D3436',
  },
  {
    identity: 'Naya · Bordeaux',
    stars: '★★★★☆',
    review:
      '"Très belle qualité, la laisse est douce en main et le rendu est super chic. Livraison rapide, je recommande sans hésiter."',
    product: 'Laisse Moutarde',
    image: '/laisse.jpg',
    cta: '#D4A373',
  },
]

const articles = [
  {
    type: 'Guide',
    time: '6 min',
    title: 'Bien choisir la taille du harnais',
    text: 'Mesures clés, points de confort et astuces simples pour trouver le fit parfait selon la morphologie de ton chien.',
    image: '/harnais.jpg',
    badgeBg: '#F0F4F1',
    badgeText: '#728B75',
    titleClass: 'text-[44px] leading-[0.94]',
  },
  {
    type: 'Style',
    time: '4 min',
    title: 'Bandana, snood, collier : les bons mix',
    text: 'Nos associations préférées pour un look cohérent, chic et pratique, en ville comme en balade du week-end.',
    image: '/snood.jpg',
    badgeBg: '#FDF2F2',
    badgeText: '#D4A373',
    titleClass: 'text-[44px] leading-[0.94]',
  },
  {
    type: 'Entretien',
    time: '5 min',
    title: 'Comment entretenir ses accessoires',
    text: 'Lavage, séchage, rangement: le protocole maison pour garder tes pièces belles, propres et durables dans le temps.',
    image: '/collier.jpg',
    badgeBg: '#F0F4F1',
    badgeText: '#728B75',
    titleClass: 'text-[36px] leading-[0.95]',
  },
]

function App() {
  return (
    <div className="bg-sable text-anthracite">
      <div className="flex h-12 items-center justify-center bg-[#728B75] text-center font-rubik text-[11px] tracking-[0.16em] text-white">
        -20% sur la gamme SNOODS | Code SNOODS2026
      </div>

      <header className="bg-sable">
        <nav className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-y-3 border-b border-anthracite/12 px-4 py-3 md:h-[120px] md:flex-nowrap md:gap-y-0 md:px-[52px] md:py-0">
          <div className="flex w-auto items-center gap-4 text-anthracite md:w-[220px]">
            <Instagram size={19} strokeWidth={1.8} />
            <Facebook size={19} strokeWidth={1.8} />
            <Twitter size={19} strokeWidth={1.8} />
          </div>

          <div className="order-3 flex w-full items-center justify-center gap-2 md:order-none md:w-auto md:flex-1 md:gap-1">
            <div className="flex items-center gap-3 md:gap-4">
              <a className="font-rubik text-sm font-normal md:text-base">Boutique</a>
              <a className="font-rubik text-sm font-normal md:text-base">Le Gang</a>
            </div>
            <img
              src="/Agence_Voyage_Logo_Entreprise_Marque_Identite_Rose_Rouge-removebg-preview.png"
              alt="Les Crâneurs"
              className="h-[72px] w-[72px] object-contain md:h-[108px] md:w-[108px]"
            />
            <div className="flex items-center gap-3 md:gap-4">
              <a className="font-rubik text-sm font-normal md:text-base">Journal</a>
              <a className="font-rubik text-sm font-normal md:text-base">Contact</a>
            </div>
          </div>

          <div className="flex w-auto items-center justify-end gap-4 text-anthracite md:w-[220px]">
            <Search size={19} strokeWidth={1.8} />
            <UserRound size={19} strokeWidth={1.8} />
            <div className="relative">
              <ShoppingBag size={19} strokeWidth={1.8} />
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-anthracite text-[9px] font-semibold text-white">
                2
              </span>
            </div>
          </div>
        </nav>
      </header>

      <section
        className="relative min-h-[100dvh] overflow-hidden bg-[#8f8f8f]"
        style={{
          backgroundImage: "url('/image 24.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto flex w-full max-w-[1440px] md:h-[980px]">
          <div className="flex w-full px-4 pb-28 pt-8 md:h-full md:w-[60%] md:px-0 md:pb-0 md:pt-[72px] md:pl-[90px]">
            <div className="glass-panel relative w-full rounded-[26px] px-5 pb-6 pt-16 md:h-[621px] md:w-[700px] md:rounded-[30px] md:px-[52px] md:pb-[56px] md:pt-[84px]">
              <div className="absolute left-5 top-6 flex items-center gap-3 text-[#728B75] md:left-[52px] md:top-[35px]">
                <PawPrint size={14} />
                <span className="font-rubik text-[11px] uppercase tracking-[0.16em]">Luxe artisanal</span>
                <span className="block h-[1px] w-16 rounded-full bg-moutarde" />
              </div>
              <h1 className="font-cormorant text-[58px] leading-[0.9] tracking-[-0.04em] text-anthracite md:text-[112px]">
                Le style
                <br />
                canin revisité.
              </h1>
              <p className="absolute left-0 top-0 -rotate-[5deg] translate-x-[185px] translate-y-[36px] font-sacramento text-[44px] leading-none text-moutarde md:translate-x-[370px] md:translate-y-[42px] md:text-[58px]">
                Fait main a
                <br />
                Paris
              </p>

              <p className="mt-5 max-w-[560px] text-justify font-rubik text-[15px] leading-[1.65] text-anthracite md:mt-6 md:text-[18px] md:leading-[1.7]">
                <strong>Accessoires premium made in France</strong>, une allure couture, un{' '}
                <strong>confort pensé pour leur mouvement</strong>, et une coupe signature qui les
                rend inoubliables.
              </p>

              <div className="mt-6 flex w-full items-center justify-around gap-3 md:mt-7 md:w-[560px] md:gap-[18px]">
                <button className="rounded-full bg-moutarde px-6 py-2 font-rubik text-[11px] uppercase tracking-[0.22em] text-white">
                  Explorer la collection
                </button>
                <a className="border-b border-moutarde pb-[1px] font-rubik text-[11px] uppercase tracking-[0.22em] text-anthracite">
                  Le gang
                </a>
              </div>

              <div className="mt-6 flex justify-center gap-2 md:absolute md:left-1/2 md:top-[510px] md:mt-0 md:-translate-x-1/2">
                {['HOME MADE', 'MADE IN FRANCE'].map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-anthracite/15 px-4 py-1 font-rubik text-[10px] uppercase tracking-[0.18em] ${
                      tag === 'HOME MADE' ? 'bg-[rgba(114,139,117,0.14)]' : 'bg-[rgba(212,163,115,0.18)]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-center font-rubik text-[11px] uppercase tracking-[0.12em] text-anthracite/75 md:absolute md:left-1/2 md:top-[553px] md:mt-0 md:-translate-x-1/2 md:text-[12px]">
                Édition couture · Série limitée · Pensé pour le mouvement
              </p>
            </div>
          </div>

        </div>

        <svg
          viewBox="0 0 1440 170"
          className="absolute bottom-0 left-0 h-[170px] w-full"
          preserveAspectRatio="none"
        >
          <path fill="#FAF7F2" d="M0,130L80,118.7C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,90.7L1440,85L1440,170L0,170Z" />
        </svg>
      </section>

      <section className="px-4 pb-16 pt-12 md:px-[90px] md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[1260px]">
          <p className="font-sacramento text-[36px] text-[#c7a98a]">La promesse</p>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-cormorant text-5xl tracking-tight md:text-6xl">Pourquoi la meute nous fait confiance</h2>
              <p className="mt-2 max-w-[620px] font-rubik text-sm leading-relaxed text-anthracite/70">
                Des <strong>pièces home-made pensées pour durer</strong>, testées par des chiens
                actifs et adoptées par une <strong>communauté exigeante</strong>.
              </p>
            </div>
            <span className="font-rubik text-[10px] uppercase tracking-[0.2em] text-anthracite/45">Depuis 2026</span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: '✓',
                title: 'Fait main en France',
                text: 'Chaque pièce est découpée, montée et contrôlée en atelier.',
                tag: 'Atelier',
                metaLeft: 'Traçabilité atelier',
                accentBg: '#D4A373',
                cardBg: '#F0F4F1',
              },
              {
                icon: '⟲',
                title: 'Livraison 48h',
                text: 'Preparation rapide et suivi precis pour chaque commande.',
                tag: 'Express',
                metaLeft: 'Colis suivi',
                accentBg: '#728B75',
                cardBg: '#FDF2F2',
              },
              {
                icon: '❤',
                title: 'Confort valide',
                text: 'Matieres souples, coupes testees sur chiens actifs.',
                tag: 'Validé',
                metaLeft: 'Test terrain',
                accentBg: '#2D3436',
                cardBg: '#F0F4F1',
              },
            ].map((card) => (
              <article
                key={card.title}
                className="flex min-h-[256px] flex-col rounded-2xl border border-anthracite/10 p-5 md:h-[256px] md:p-6"
                style={{ backgroundColor: card.cardBg }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full font-rubik text-sm text-sable"
                    style={{ backgroundColor: card.accentBg }}
                  >
                    {card.icon}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 font-rubik text-[10px] uppercase tracking-[0.2em] text-sable"
                    style={{ backgroundColor: card.accentBg }}
                  >
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-cormorant text-[34px] leading-none text-anthracite">{card.title}</h3>
                <p className="mt-3 font-rubik text-sm leading-relaxed text-anthracite/70">
                  {card.title === 'Fait main en France' && (
                    <>
                      Chaque pièce est <strong>découpée, montée et contrôlée</strong> en atelier.
                    </>
                  )}
                  {card.title === 'Livraison 48h' && (
                    <>
                      <strong>Préparation rapide</strong> et suivi précis pour chaque commande.
                    </>
                  )}
                  {card.title === 'Confort valide' && (
                    <>
                      <strong>Matières souples</strong>, coupes testées sur chiens actifs.
                    </>
                  )}
                </p>
                <div className="mt-auto">
                  <hr className="border-anthracite/15" />
                  <div className="flex items-center justify-between pt-[14px]">
                    <p className="font-rubik text-[11px] uppercase tracking-[0.16em] text-[#728B75]">
                      {card.metaLeft}
                    </p>
                    <p className="font-rubik text-[11px] uppercase tracking-[0.16em] text-anthracite">
                      En savoir +
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['4.9/5', 'Avis 5 etoiles'],
              ['2 800+', 'Pieces cousues'],
              ['30 jours', 'Retours simplifiés'],
              ['73%', 'Clientèle fidèle'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-xl border border-anthracite/10 bg-white px-4 py-3">
                <p className="font-rubik text-[11px] uppercase tracking-[0.16em] text-[#728B75]">{label}</p>
                <p className="font-cormorant text-2xl text-anthracite">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vieuxrose/50 px-4 pb-16 pt-10 md:px-[90px] md:pb-20 md:pt-14">
        <div className="mx-auto max-w-[1260px]">
          <p className="font-sacramento text-[36px] text-[#c7a98a]">Selection maison</p>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-cormorant text-5xl tracking-tight md:text-6xl">Nos incontournables</h2>
              <p className="mt-2 font-rubik text-sm leading-relaxed text-anthracite/70">
                Des <strong>pièces signatures</strong> qui reviennent dans toutes les commandes de
                la meute.
              </p>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button className="grid h-10 w-10 place-items-center rounded-full border border-anthracite/20 bg-white text-anthracite/70">
                <PawPrint size={16} className="rotate-[225deg]" fill="currentColor" strokeWidth={1.6} />
              </button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-[#728B75] text-white">
                <PawPrint size={16} className="rotate-[45deg]" fill="currentColor" strokeWidth={1.6} />
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:flex-wrap md:justify-between">
            {products.map((product, index) => (
              <article key={product.name} className="w-full rounded-2xl border border-anthracite/10 bg-white p-3 md:w-[24%]">
                <img src={product.image} alt={product.name} className="h-52 w-full rounded-xl object-cover" />
                <p className="mt-4 font-rubik text-[10px] uppercase tracking-[0.18em] text-anthracite/45">{product.category}</p>
                <h3 className="min-h-[48px] font-cormorant text-[30px] leading-[1.05] text-anthracite">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between pb-[15px]">
                  <p className="font-rubik text-[26px] font-semibold leading-none text-anthracite">{product.price}</p>
                  <button
                    className={`rounded-full px-4 py-2 font-rubik text-[10px] uppercase tracking-[0.18em] text-white ${
                      index % 2 === 0 ? 'bg-moutarde' : 'bg-anthracite'
                    }`}
                  >
                    Ajouter +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-[90px] md:py-[78px]">
        <div className="mx-auto flex max-w-[1260px] flex-col gap-8 md:items-center md:flex-row md:gap-12">
          <div className="flex w-full flex-col gap-[18px] md:h-[704px] md:w-[56%]">
            <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-anthracite/[0.08] bg-sauge md:h-[600px] md:rounded-[36px]">
              <img src="/harnais.jpg" alt="Depuis notre atelier" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] to-black/[0.30]" />

              <div className="absolute left-6 top-6 rounded-full bg-sable/90 px-3 py-[9px]">
                <p className="font-rubik text-[10px] uppercase tracking-[1.6px] text-[#728B75]">
                  Depuis notre atelier
                </p>
              </div>

              <div className="absolute bottom-6 left-6 flex flex-col gap-[6px]">
                <p className="font-sacramento text-[48px] leading-[0.9] -rotate-[3deg] text-vieuxrose">
                  fait main
                </p>
                <p className="font-rubik text-[13px] uppercase tracking-[1.2px] text-sable">
                  HomeMade • Made in France
                </p>
              </div>
            </div>

            <div className="grid h-[86px] grid-cols-2 gap-3">
              <div className="flex flex-col justify-center rounded-[14px] border border-anthracite/[0.08] bg-white px-[14px]">
                <p className="font-rubik text-[10px] uppercase tracking-[1.5px] text-anthracite">
                  Tissus signatures
                </p>
                <p className="font-cormorant text-[34px] leading-[0.9] text-moutarde">12+</p>
              </div>
              <div className="flex flex-col justify-center rounded-[14px] border border-anthracite/[0.08] bg-white px-[14px]">
                <p className="font-rubik text-[10px] uppercase tracking-[1.5px] text-anthracite">
                  Tailles disponibles
                </p>
                <p className="font-cormorant text-[34px] leading-[0.9] text-moutarde">3</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[44%]">
            <div className="flex h-full flex-col justify-center gap-5 rounded-[28px] border border-anthracite/[0.08] bg-[#F8F2F1] px-6 py-8 md:min-h-[704px] md:px-[44px] md:py-[52px]">
              <p className="self-start font-sacramento text-[50px] leading-[0.9] -rotate-[2deg] text-moutarde">
                notre histoire
              </p>
              <h2 className="font-cormorant text-[62px] leading-[0.92] tracking-[-0.6px] text-anthracite">
                Tout a commencé
                <br />
                par un coup de
                <br />
                patte...
              </h2>
              <p className="font-rubik text-[17px] leading-[1.6] text-anthracite/90">
                Plus qu'une marque, Les Crâneurs est née d'une envie simple :{' '}
                <strong>offrir a nos compagnons l'elegance qu'ils meritent</strong>, sans compromis
                sur leur confort.
              </p>
              <p className="font-rubik text-[15px] leading-[1.65] text-anthracite/78">
                Tout a débuté dans mon petit atelier, entre deux chutes de tissus et le regard complice
                de mon propre chien. L'idée ? Allier le chic a la française a la spontanéité de nos boules
                de poils. Du bandana intemporel au snood ultra-confort, chaque pièce est{' '}
                <strong>pensée, découpée et cousue a la main</strong> avec une attention infinie aux
                détails.
              </p>
              <p className="font-rubik text-[15px] leading-[1.65] text-anthracite/78">
                Parce qu'au fond, nos chiens sont bien plus que des animaux de compagnie. Ce sont des
                <strong>complices de vie</strong>... et, avouons-le, de sacrés petits crâneurs.
              </p>

              <div className="mt-1 flex items-center justify-between">
                <p className="font-rubik text-[11px] uppercase tracking-[1.8px] text-[#728B75]">
                  Atelier parisien · Série limitée
                </p>
                <button className="h-10 rounded-full bg-[#728B75] px-[18px] font-rubik text-[11px] uppercase tracking-[1.6px] text-sable">
                  Lire le journal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sable px-4 pb-14 pt-12 md:px-[90px] md:pb-[70px] md:pt-[78px]">
        <div className="mx-auto flex max-w-[1260px] flex-col gap-[30px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sacramento text-[54px] leading-[0.9] text-moutarde">
                leurs looks, leurs mots
              </p>
              <h2 className="font-cormorant text-[74px] leading-[0.92] tracking-[-1px] text-anthracite">
                Le gang des Crâneurs
              </h2>
              <p className="font-rubik text-base text-anthracite/74">
                Des chiens bien habillés, des humains ravis: découvre leurs <strong>retours</strong>{' '}
                et shoppe le même article.
              </p>
            </div>
            <div className="flex h-[30px] items-center rounded-full bg-sauge px-3">
              <span className="font-rubik text-[10px] uppercase tracking-[1.5px] text-[#728B75]">
                Avis vérifiés
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto pb-2 md:overflow-visible md:pb-0">
              {gang.map((item) => (
                <article key={item.identity} className="flex h-[519px] min-w-[320px] flex-[0_0_320px] snap-start flex-col overflow-hidden rounded-[24px] border border-anthracite/[0.08] bg-white md:w-[408px] md:min-w-0 md:flex-[0_0_408px]">
                  <img src={item.image} alt={item.identity} className="h-[300px] w-full object-cover" />
                  <div className="flex h-[219px] flex-col gap-[14px] px-5 pb-[18px] pt-5">
                    <div className="flex items-center justify-between">
                      <span className="font-rubik text-[11px] uppercase tracking-[1.4px] text-[#728B75]">
                        {item.identity}
                      </span>
                      <span className="font-rubik text-[14px] text-moutarde">{item.stars}</span>
                    </div>
                    <p className="font-rubik text-[15px] leading-[1.55] text-anthracite/82">
                      {item.identity === 'Luna · Paris' && (
                        <>
                          "Le harnais est canon et surtout <strong>super confortable</strong>. Luna
                          court partout sans gêne, et tout le monde nous demande d'où il vient."
                        </>
                      )}
                      {item.identity === 'Milo · Lyon' && (
                        <>
                          "Le bandana tient bien en place et la matière est top. On l'a pris pour
                          les sorties du week-end et <strong>il ne le quitte plus</strong>."
                        </>
                      )}
                      {item.identity === 'Naya · Bordeaux' && (
                        <>
                          "Très belle qualité, la laisse est douce en main et le rendu est super
                          chic. <strong>Livraison rapide</strong>, je recommande sans hésiter."
                        </>
                      )}
                    </p>
                    <div className="mt-[18px] flex items-end justify-between">
                      <div className="flex flex-col gap-[2px]">
                        <span className="font-rubik text-[10px] uppercase tracking-[1.4px] text-[#728B75]">
                          Article porté
                        </span>
                        <span className="font-cormorant text-[33px] leading-[0.95] text-anthracite">
                          {item.product}
                        </span>
                      </div>
                      <button
                        className="flex h-[38px] items-center justify-center self-end rounded-full px-[14px] font-rubik text-[10px] uppercase tracking-[1.4px] text-white"
                        style={{ backgroundColor: item.cta }}
                      >
                        Acheter
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex h-6 items-center justify-center gap-3">
              <button className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-[#728B75] bg-sauge text-[#728B75]">
                <Bone size={12} fill="currentColor" />
              </button>
              <span className="h-2 w-2 rounded-full bg-anthracite/24" />
              <span className="h-2 w-2 rounded-full bg-anthracite/24" />
              <span className="h-2 w-2 rounded-full bg-anthracite/24" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sable px-4 pb-14 pt-12 md:px-[90px] md:pb-[68px] md:pt-[78px]">
        <div className="mx-auto flex max-w-[1260px] flex-col gap-[30px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sacramento text-[54px] leading-[0.9] text-moutarde">
                inspirations & conseils
              </p>
              <h2 className="font-cormorant text-[74px] leading-[0.92] tracking-[-1px] text-anthracite">
                Le journal des Crâneurs
              </h2>
              <p className="font-rubik text-base text-anthracite/74">
                Des articles pour <strong>mieux choisir, entretenir et styliser</strong> les
                essentiels de la meute.
              </p>
            </div>
            <button className="flex h-10 items-center justify-center rounded-full bg-[#728B75] px-[18px] font-rubik text-[11px] uppercase tracking-[1.6px] text-sable">
              Voir tous les articles
            </button>
          </div>

          <div className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto pb-2 md:h-[580px] md:overflow-visible md:pb-0">
            {articles.map((item) => (
              <article key={item.title} className="flex h-[580px] min-w-[320px] flex-[0_0_320px] snap-start flex-col overflow-hidden rounded-[24px] border border-anthracite/[0.08] bg-white md:w-[408px] md:min-w-0 md:flex-[0_0_408px]">
                <img src={item.image} alt={item.title} className="h-[290px] w-full object-cover" />
                <div className="flex h-[290px] flex-col gap-[14px] px-[22px] pb-5 pt-[22px]">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-6 items-center rounded-full px-[10px] font-rubik text-[10px] uppercase tracking-[1.4px]"
                      style={{ backgroundColor: item.badgeBg, color: item.badgeText }}
                    >
                      {item.type}
                    </span>
                    <span className="font-rubik text-[11px] text-anthracite/58">{item.time}</span>
                  </div>
                  <h3 className={`font-cormorant text-anthracite ${item.titleClass}`}>
                    {item.title}
                  </h3>
                  <p className="font-rubik text-[15px] leading-[1.58] text-anthracite/60">
                    {item.type === 'Guide' && (
                      <>
                        Mesures clés, points de confort et astuces simples pour trouver{' '}
                        <strong>le fit parfait</strong> selon la morphologie de ton chien.
                      </>
                    )}
                    {item.type === 'Style' && (
                      <>
                        Nos associations préférées pour un look <strong>cohérent, chic et
                        pratique</strong>, en ville comme en balade du week-end.
                      </>
                    )}
                    {item.type === 'Entretien' && (
                      <>
                        Lavage, séchage, rangement: le protocole maison pour garder tes pièces{' '}
                        <strong>belles, propres et durables</strong> dans le temps.
                      </>
                    )}
                  </p>
                  <div className="mt-auto flex items-center gap-2">
                    <a className="font-rubik text-[11px] uppercase tracking-[1.6px] text-anthracite underline decoration-moutarde decoration-[1px] underline-offset-[3px]">
                      Lire l'article
                    </a>
                    <span className="font-rubik text-[15px] uppercase tracking-[1.6px] text-moutarde">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex h-auto flex-col gap-2 md:h-[26px] md:flex-row md:items-center md:justify-between">
            <p className="font-rubik text-[11px] uppercase tracking-[1.6px] text-[#728B75]">
              Nouveaux articles chaque semaine
            </p>
            <p className="font-rubik text-[11px] uppercase tracking-[1.6px] text-anthracite">
              Guides · Tendances · Entretien
            </p>
          </div>
        </div>
      </section>

      <footer className="relative mt-10 text-white">
        <div className="h-[86px] overflow-hidden bg-sable">
          <svg viewBox="0 0 1440 86" className="h-[86px] w-full" preserveAspectRatio="none">
            <path fill="#728B75" d="M0,10L80,26.7C160,43,320,75,480,80C640,85,800,63,960,52.7C1120,43,1280,43,1360,43L1440,43L1440,86L0,86Z" />
          </svg>
        </div>

        <div className="bg-[#728B75] px-4 pb-[18px] pt-[40px] md:px-[90px] md:pt-[56px]">
          <div className="mx-auto flex max-w-[1260px] flex-col gap-10 md:flex-row md:items-stretch md:justify-between">
            <div className="w-full md:w-[36%]">
              <h3 className="font-cormorant text-[64px] leading-[0.9] text-sable">Les Crâneurs</h3>
              <p className="mt-3 max-w-[390px] font-rubik text-[15px] leading-[1.6] text-sable/90">
                Accessoires canins faits main en France. Pour les chiens qui ont du style et du coeur.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {[Instagram, Facebook, Twitter].map((Icon, index) => (
                  <span key={index} className="grid h-9 w-9 place-items-center rounded-full border border-white/35">
                    <Icon size={16} />
                  </span>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col justify-center md:w-[24%]">
              <p className="font-rubik text-[11px] uppercase tracking-[1.8px] text-sable/90">Informations</p>
              <div className="mt-4 space-y-[10px] font-rubik text-[15px] leading-[18px] text-sable/92">
                <p>Mentions légales</p>
                <p>Politique de confidentialité</p>
                <p>CGV</p>
                <p>Contact</p>
              </div>
            </div>

            <div className="w-full pt-2 md:w-[32%]">
              <h3 className="font-cormorant text-[46px] leading-[0.95] text-sable">Rejoindre la Meute</h3>
              <p className="mt-3 max-w-[330px] font-rubik text-[15px] leading-[1.55] text-sable/90">
                Inscrivez-vous pour les sorties de collections.
              </p>
              <div className="mt-1 flex items-center gap-[10px]">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="h-[44px] w-full rounded-full border border-sable/35 bg-sable/14 px-4 font-rubik text-[13px] text-sable outline-none placeholder:text-sable/70"
                />
                <button className="h-[44px] rounded-full bg-moutarde px-[18px] font-rubik text-[12px] uppercase tracking-[0.15em] text-sable">
                  Envoyer
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 h-px max-w-[1260px] bg-white/20" />
          <div className="mx-auto mt-4 flex h-4 max-w-[1260px] items-center justify-center">
            <p className="font-rubik text-[12px] tracking-[0.2px] text-sable/90">
              © 2026 Les Crâneurs - Fait avec amour pour nos poilus.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
