import { useEffect, useState } from 'react'
import {
  Facebook,
  Instagram,
  Minus,
  PawPrint,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  Twitter,
  UserRound,
} from 'lucide-react'

const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`

const cartItems = [
  {
    name: 'Harnais Atelier',
    category: 'HARNAIS',
    size: 'M',
    price: '124€',
    image: '/harnais.webp',
  },
  {
    name: 'Snood Velours',
    category: 'SNOOD',
    size: 'L',
    price: '49€',
    image: '/snood.webp',
  },
]

function PanierPage() {
  const [isFloatingNav, setIsFloatingNav] = useState(false)

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
          <p className="font-sacramento text-[54px] leading-[0.9] text-moutarde">votre sélection</p>
          <h1 className="font-cormorant text-[78px] leading-[0.9] tracking-[-1px] text-anthracite">Panier</h1>
          <p className="mt-3 max-w-[700px] font-rubik text-[16px] leading-[1.65] text-anthracite/78">
            Vérifiez vos pièces et finalisez votre commande.
          </p>
        </section>

        <section className="mx-auto mt-8 grid max-w-[1260px] gap-5 md:grid-cols-[1fr_0.42fr]">
          <article className="rounded-[24px] border border-anthracite/[0.08] bg-white p-4 md:p-6">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="grid gap-3 rounded-[18px] border border-anthracite/[0.08] bg-sable p-3 md:grid-cols-[140px_1fr_auto]"
                >
                  <img src={withBase(item.image)} alt={item.name} className="h-[120px] w-full rounded-[14px] object-cover md:w-[140px]" />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-rubik text-[10px] uppercase tracking-[0.15em] text-[#728B75]">
                        {item.category} · Taille {item.size}
                      </p>
                      <h2 className="mt-2 font-cormorant text-[40px] leading-[0.92] text-anthracite">{item.name}</h2>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button className="grid h-8 w-8 place-items-center rounded-full border border-anthracite/20 bg-white text-anthracite">
                        <Minus size={14} />
                      </button>
                      <span className="font-rubik text-[13px] text-anthracite">1</span>
                      <button className="grid h-8 w-8 place-items-center rounded-full border border-anthracite/20 bg-white text-anthracite">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button className="grid h-8 w-8 place-items-center rounded-full border border-anthracite/20 bg-white text-anthracite/70">
                      <Trash2 size={14} />
                    </button>
                    <p className="font-rubik text-[28px] font-semibold leading-none text-anthracite">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={withBase('/boutique')}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-anthracite/15 bg-white px-5 font-rubik text-[10px] uppercase tracking-[0.16em] text-anthracite no-underline"
            >
              Continuer mes achats
            </a>
          </article>

          <aside className="h-fit rounded-[24px] border border-anthracite/[0.08] bg-white p-5 md:p-6">
            <h2 className="font-cormorant text-[52px] leading-[0.92] text-anthracite">Résumé</h2>

            <div className="mt-5 rounded-[16px] border border-anthracite/[0.08] bg-sable p-3">
              <p className="font-rubik text-[10px] uppercase tracking-[0.15em] text-[#728B75]">Code promo</p>
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="SNOODS2026"
                  className="h-10 w-full rounded-full border border-anthracite/15 bg-white px-4 font-rubik text-[12px] text-anthracite outline-none placeholder:text-anthracite/45"
                />
                <button className="h-10 rounded-full bg-[#728B75] px-4 font-rubik text-[10px] uppercase tracking-[0.14em] text-white">
                  Appliquer
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-3 border-b border-anthracite/10 pb-4">
              <div className="flex items-center justify-between font-rubik text-[14px] text-anthracite/80">
                <span>Sous-total</span>
                <span>173€</span>
              </div>
              <div className="flex items-center justify-between font-rubik text-[14px] text-anthracite/80">
                <span>Livraison</span>
                <span>Offerte</span>
              </div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <span className="font-rubik text-[11px] uppercase tracking-[0.15em] text-[#728B75]">Total</span>
              <span className="font-rubik text-[36px] font-semibold leading-none text-anthracite">173€</span>
            </div>

            <button className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#2D3436] font-rubik text-[10px] uppercase tracking-[0.17em] text-white">
              Finaliser la commande
            </button>

            <button className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#0070BA] font-rubik text-[10px] uppercase tracking-[0.17em] text-white">
              Payer avec PayPal
            </button>

            <p className="mt-3 text-center font-rubik text-[11px] uppercase tracking-[0.14em] text-[#728B75]">
              Paiement sécurisé · Livraison suivie
            </p>
          </aside>
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

export default PanierPage
