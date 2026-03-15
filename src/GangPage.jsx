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

const gangMembers = [
  {
    name: 'Luna · Paris',
    product: 'Harnais Atelier',
    quote:
      "Le harnais est canon et surtout super confortable. Luna court partout sans gêne, et tout le monde nous demande d'où il vient.",
    rating: '★★★★★',
    image: '/harnais.webp',
    cta: '#D4A373',
  },
  {
    name: 'Milo · Lyon',
    product: 'Snood Velours',
    quote:
      "Le snood tient parfaitement en place et la matière est top. On l'a pris pour les sorties du week-end et il ne le quitte plus.",
    rating: '★★★★★',
    image: '/snood.webp',
    cta: '#2D3436',
  },
  {
    name: 'Naya · Bordeaux',
    product: 'Laisse Sauge',
    quote:
      "Très belle qualité, la laisse est douce en main et le rendu est super chic. Livraison rapide, je recommande sans hésiter.",
    rating: '★★★★☆',
    image: '/laisse.webp',
    cta: '#D4A373',
  },
  {
    name: 'Luna · Paris',
    product: 'Harnais Atelier',
    quote:
      "Le harnais est canon et surtout super confortable. Luna court partout sans gêne, et tout le monde nous demande d'où il vient.",
    rating: '★★★★★',
    image: '/harnais.webp',
    cta: '#D4A373',
  },
  {
    name: 'Milo · Lyon',
    product: 'Snood Velours',
    quote:
      "Le snood tient parfaitement en place et la matière est top. On l'a pris pour les sorties du week-end et il ne le quitte plus.",
    rating: '★★★★★',
    image: '/snood.webp',
    cta: '#2D3436',
  },
  {
    name: 'Naya · Bordeaux',
    product: 'Laisse Sauge',
    quote:
      "Très belle qualité, la laisse est douce en main et le rendu est super chic. Livraison rapide, je recommande sans hésiter.",
    rating: '★★★★☆',
    image: '/laisse.webp',
    cta: '#D4A373',
  },
]

const instaWall = [
  '/harnais.webp',
  '/snood.webp',
  '/collier.webp',
  '/laisse.webp',
  '/harnais.webp',
  '/snood.webp',
]

function GangPage() {
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
          <p className="font-sacramento text-[54px] leading-[0.9] text-moutarde">leurs looks, leurs mots</p>
          <h1 className="font-cormorant text-[78px] leading-[0.9] tracking-[-1px] text-anthracite">
            Le Gang des Crâneurs
          </h1>
          <p className="mt-3 max-w-[700px] font-rubik text-[16px] leading-[1.65] text-anthracite/78">
            Des chiens bien habillés, des humains ravis. Explore les retours de la communauté et shoppe les mêmes pièces.
          </p>
        </section>

        <section className="mx-auto mt-8 max-w-[1260px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {gangMembers.map((item, index) => (
              <article key={`${item.name}-${index}`} className="overflow-hidden rounded-[24px] border border-anthracite/[0.08] bg-white">
                <img src={withBase(item.image)} alt={item.name} className="h-[290px] w-full object-cover" />
                <div className="flex min-h-[285px] flex-col px-5 pb-5 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-rubik text-[11px] uppercase tracking-[1.4px] text-[#728B75]">{item.name}</span>
                    <span className="font-rubik text-[14px] text-moutarde">{item.rating}</span>
                  </div>
                  <p className="mt-3 font-rubik text-[15px] leading-[1.55] text-anthracite/82">"{item.quote}"</p>
                  <div className="mt-auto flex items-end justify-between pt-4">
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-rubik text-[10px] uppercase tracking-[1.4px] text-[#728B75]">
                        Article porté
                      </span>
                      <span className="font-cormorant text-[33px] leading-[0.95] text-anthracite">{item.product}</span>
                    </div>
                    <a
                      href={withBase('/product')}
                      className="inline-flex h-[38px] items-center justify-center rounded-full px-[14px] font-rubik text-[10px] uppercase tracking-[1.4px] !text-white no-underline visited:!text-white hover:!text-white"
                      style={{ backgroundColor: item.cta }}
                    >
                      Acheter
                    </a>
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

        <section className="mx-auto mt-10 max-w-[1260px] rounded-[24px] border border-anthracite/[0.08] bg-vieuxrose px-6 py-6 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-sacramento text-[42px] leading-[0.9] text-moutarde">#lescraneursgang</p>
              <p className="font-rubik text-[15px] text-anthracite/76">
                Partage ton look pour apparaître dans la prochaine sélection de la meute.
              </p>
            </div>
            <a
              href={withBase('/contact')}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#728B75] px-5 font-rubik text-[10px] uppercase tracking-[0.16em] !text-white no-underline visited:!text-white hover:!text-white"
            >
              Nous contacter
            </a>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[1260px]">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-sacramento text-[46px] leading-[0.9] text-moutarde">sur Instagram</p>
              <h2 className="font-cormorant text-[64px] leading-[0.9] tracking-[-1px] text-anthracite">Feed de la communauté</h2>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
            {instaWall.map((src, idx) => (
              <article key={`${src}-${idx}`} className="overflow-hidden rounded-[18px] border border-anthracite/[0.08] bg-white">
                <img src={withBase(src)} alt={`Post communauté ${idx + 1}`} className="h-[180px] w-full object-cover md:h-[200px]" />
              </article>
            ))}
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

export default GangPage
