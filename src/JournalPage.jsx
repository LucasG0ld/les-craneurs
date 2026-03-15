import { useEffect, useState } from 'react'
import {
  Facebook,
  Instagram,
  PawPrint,
  Search,
  ShoppingBag,
  Twitter,
  UserRound,
} from 'lucide-react'

const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`

const featured = {
  type: 'Guide',
  read: '7 min',
  title: 'Comment choisir le harnais parfait selon la morphologie de son chien',
  excerpt:
    'Tour de poitrail, liberté d’épaules et maintien: notre méthode simple pour trouver un ajustement élégant et confortable.',
  image: '/harnais.webp',
}

const posts = [
  {
    type: 'Style',
    read: '4 min',
    title: 'Les bons mix: bandana, snood, collier',
    text: 'Composer un look cohérent sans surcharger: nos associations signatures de la saison.',
    image: '/snood.webp',
    badgeBg: '#FDF2F2',
    badgeColor: '#D4A373',
  },
  {
    type: 'Entretien',
    read: '5 min',
    title: 'Protocole atelier pour garder ses pièces impeccables',
    text: 'Lavage, séchage, rangement: les gestes qui prolongent la durée de vie de vos accessoires.',
    image: '/collier.webp',
    badgeBg: '#F0F4F1',
    badgeColor: '#728B75',
  },
  {
    type: 'Coulisses',
    read: '3 min',
    title: "Dans l'atelier: naissance d'une collection limitée",
    text: 'De la sélection des tissus aux finitions: immersion dans notre processus de création.',
    image: '/laisse.webp',
    badgeBg: '#F0F4F1',
    badgeColor: '#728B75',
  },
  {
    type: 'Guide',
    read: '6 min',
    title: "Le guide des matières: confort, tenue et saisonnalité",
    text: 'Comment choisir la bonne matière selon l’activité, la météo et le tempérament de votre chien.',
    image: '/harnais.webp',
    badgeBg: '#FDF2F2',
    badgeColor: '#D4A373',
  },
  {
    type: 'Lifestyle',
    read: '4 min',
    title: 'City walk: nos adresses pet-friendly à Paris',
    text: 'Un parcours chic pour balader son chien avec style entre cafés, concept stores et parcs.',
    image: '/snood.webp',
    badgeBg: '#F0F4F1',
    badgeColor: '#728B75',
  },
  {
    type: 'Entretien',
    read: '5 min',
    title: 'Réparer plutôt que remplacer: nos conseils durables',
    text: 'Petites réparations et bonnes pratiques pour conserver vos pièces favorites plus longtemps.',
    image: '/collier.webp',
    badgeBg: '#FDF2F2',
    badgeColor: '#D4A373',
  },
]

function JournalPage() {
  const [isFloatingNav, setIsFloatingNav] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const simulatedTotalPages = 3

  useEffect(() => {
    const onScroll = () => setIsFloatingNav(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBackToTop = () => {
    const startY = window.scrollY
    const duration = 900
    let startTime = null

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutCubic(progress)
      window.scrollTo(0, startY * (1 - eased))
      if (progress < 1) window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)
  }

  return (
    <div className="min-h-screen bg-sable text-anthracite">
      <div className="flex h-12 items-center justify-center bg-[#728B75] text-center font-rubik text-[11px] tracking-[0.16em] text-white">
        -20% sur la gamme SNOODS | Code SNOODS2026
      </div>

      <header className="relative h-[96px] bg-sable md:h-[120px]">
        <nav
          className={`left-1/2 z-40 flex w-[calc(100%-16px)] -translate-x-1/2 flex-wrap items-center justify-between gap-y-3 px-4 py-3 transition-all duration-500 ease-out md:flex-nowrap md:gap-y-0 md:px-[52px] ${
            isFloatingNav
              ? 'fixed top-2 h-[74px] max-w-[1180px] rounded-2xl border border-anthracite/12 bg-sable/95 shadow-lg backdrop-blur'
              : 'absolute top-0 h-[96px] max-w-[1440px] border-b border-anthracite/12 bg-sable md:h-[120px]'
          }`}
        >
          <div className="flex w-auto items-center gap-4 text-anthracite md:w-[220px]">
            <Instagram size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
            <Facebook size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
            <Twitter size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
          </div>

          <div className="order-3 flex w-full items-center justify-center gap-2 md:order-none md:w-auto md:flex-1 md:gap-1">
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={withBase('/boutique')}
                className={`font-rubik font-normal transition-all ${isFloatingNav ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
              >
                Boutique
              </a>
              <a
                href={withBase('/gang')}
                className={`font-rubik font-normal transition-all ${isFloatingNav ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
              >
                Le Gang
              </a>
            </div>
            <a href={withBase('/')}>
              <img
                src={withBase('/Agence_Voyage_Logo_Entreprise_Marque_Identite_Rose_Rouge-removebg-preview.webp')}
                alt="Les Crâneurs"
                className={`object-contain transition-all ${isFloatingNav ? 'h-[56px] w-[56px] md:h-[72px] md:w-[72px]' : 'h-[72px] w-[72px] md:h-[108px] md:w-[108px]'}`}
              />
            </a>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={withBase('/journal')}
                className={`font-rubik font-normal transition-all ${isFloatingNav ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
              >
                Journal
              </a>
              <a
                href={withBase('/contact')}
                className={`font-rubik font-normal transition-all ${isFloatingNav ? 'text-xs md:text-sm' : 'text-sm md:text-base'}`}
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex w-auto items-center justify-end gap-4 text-anthracite md:w-[220px]">
            <Search size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
            <UserRound size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
            <a href={withBase('/panier')} className="relative">
              <ShoppingBag size={isFloatingNav ? 17 : 19} strokeWidth={1.8} />
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-anthracite text-[9px] font-semibold text-white">
                2
              </span>
            </a>
          </div>
        </nav>
      </header>

      <main className="px-4 pb-14 pt-8 md:px-[90px] md:pb-[80px] md:pt-[52px]">
        <section className="mx-auto max-w-[1260px]">
          <p className="font-sacramento text-[54px] leading-[0.9] text-moutarde">inspirations & conseils</p>
          <h1 className="font-cormorant text-[78px] leading-[0.9] tracking-[-1px] text-anthracite">
            Le journal des Crâneurs
          </h1>
          <p className="mt-3 max-w-[700px] font-rubik text-[16px] leading-[1.65] text-anthracite/78">
            Des contenus pour mieux choisir, entretenir et styliser les essentiels de la meute.
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-[1260px] overflow-hidden rounded-[28px] border border-anthracite/[0.08] bg-white">
          <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
            <img src={withBase(featured.image)} alt={featured.title} className="h-[340px] w-full object-cover md:h-[460px]" />
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sauge px-3 py-[6px] font-rubik text-[10px] uppercase tracking-[1.4px] text-[#728B75]">
                    {featured.type}
                  </span>
                  <span className="font-rubik text-[11px] text-anthracite/58">{featured.read}</span>
                </div>
                <h2 className="mt-3 font-cormorant text-[54px] leading-[0.92] tracking-[-0.8px] text-anthracite">
                  {featured.title}
                </h2>
                <p className="mt-3 font-rubik text-[15px] leading-[1.62] text-anthracite/74">{featured.excerpt}</p>
              </div>
              <a
                href={withBase('/product')}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-[#2D3436] px-5 font-rubik text-[10px] uppercase tracking-[0.16em] !text-white no-underline visited:!text-white hover:!text-white md:w-fit"
              >
                Lire l'article
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[1260px]">
          <div className="flex flex-wrap gap-2">
            {['Tout', 'Guide', 'Style', 'Entretien', 'Lifestyle', 'Coulisses'].map((tag, idx) => (
              <button
                key={tag}
                className={`h-9 rounded-full px-4 font-rubik text-[10px] uppercase tracking-[0.16em] ${
                  idx === 0
                    ? 'bg-anthracite text-white'
                    : 'border border-anthracite/15 bg-white text-anthracite'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {posts.map((post, index) => (
              <article key={`${post.title}-${index}`} className="overflow-hidden rounded-[22px] border border-anthracite/[0.08] bg-white">
                <img src={withBase(post.image)} alt={post.title} className="h-[250px] w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-[10px] py-[6px] font-rubik text-[10px] uppercase tracking-[1.4px]"
                      style={{ backgroundColor: post.badgeBg, color: post.badgeColor }}
                    >
                      {post.type}
                    </span>
                    <span className="font-rubik text-[11px] text-anthracite/58">{post.read}</span>
                  </div>
                  <h3 className="mt-3 min-h-[74px] font-cormorant text-[42px] leading-[0.92] text-anthracite">
                    {post.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] font-rubik text-[15px] leading-[1.6] text-anthracite/72">{post.text}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={withBase('/product')}
                      className="font-rubik text-[11px] uppercase tracking-[1.6px] text-anthracite underline decoration-moutarde decoration-[1px] underline-offset-[3px]"
                    >
                      Lire l'article
                    </a>
                    <span className="font-rubik text-[15px] text-moutarde">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              className="h-9 rounded-full border border-anthracite/15 bg-white px-4 font-rubik text-[10px] uppercase tracking-[0.14em] text-anthracite disabled:cursor-not-allowed disabled:opacity-40"
            >
              Précédent
            </button>

            {Array.from({ length: simulatedTotalPages }).map((_, idx) => {
              const page = idx + 1
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 min-w-9 rounded-full px-3 font-rubik text-[10px] uppercase tracking-[0.14em] ${
                    page === currentPage
                      ? 'bg-anthracite text-white'
                      : 'border border-anthracite/15 bg-white text-anthracite'
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(simulatedTotalPages, page + 1))}
              disabled={currentPage === simulatedTotalPages}
              className="h-9 rounded-full border border-anthracite/15 bg-white px-4 font-rubik text-[10px] uppercase tracking-[0.14em] text-anthracite disabled:cursor-not-allowed disabled:opacity-40"
            >
              Suivant
            </button>
          </div>
        </section>
      </main>

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

      <button
        type="button"
        aria-label="Retour en haut"
        onClick={handleBackToTop}
        className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-[#D4A373] text-white shadow-lg transition hover:scale-105"
      >
        <PawPrint size={18} className="rotate-[310deg]" fill="currentColor" strokeWidth={1.6} />
      </button>
    </div>
  )
}

export default JournalPage
