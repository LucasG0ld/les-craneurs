import { useEffect, useState } from 'react'
import {
  Bone,
  Facebook,
  Instagram,
  Minus,
  PawPrint,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Twitter,
  UserRound,
} from 'lucide-react'

const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`

const gallery = ['/harnais.webp', '/snood.webp', '/collier.webp', '/laisse.webp']

const specs = [
  'Extérieur : coton tissé premium (origine France)',
  'Doublure : mesh respirant ultra doux',
  'Bouclerie : alliage léger finition anthracite',
  "Réglages : 4 points d'ajustement ergonomiques",
]

const relatedProducts = [
  { name: 'Laisse Sauge', category: 'Laisse', price: '89€', image: '/laisse.webp' },
  { name: 'Snood Velours', category: 'Snood', price: '49€', image: '/snood.webp' },
  { name: 'Collier Rivage', category: 'Collier', price: '64€', image: '/collier.webp' },
]

function ProductPage() {
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

      <main className="px-4 pb-14 pt-8 md:px-[90px] md:pb-[80px] md:pt-[50px]">
        <section className="mx-auto flex max-w-[1260px] flex-col gap-7">
          <p className="font-rubik text-[11px] uppercase tracking-[1.6px] text-[#728B75]">
            <a
              href={withBase('/boutique')}
              className="!text-[#728B75] no-underline visited:!text-[#728B75] hover:!text-[#728B75]"
            >
              Boutique
            </a>{' '}
            / Harnais / Harnais Atelier
          </p>

          <div className="flex flex-col gap-6 md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-10">
            <div className="flex flex-col gap-3">
              <img
                src={withBase('/harnais.webp')}
                alt="Harnais Atelier"
                className="h-[500px] w-full rounded-[26px] border border-anthracite/[0.08] object-cover md:h-[690px]"
              />
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((image, index) => (
                  <img
                    key={image}
                    src={withBase(image)}
                    alt={`Vue produit ${index + 1}`}
                    className="h-[96px] w-full rounded-[14px] border border-anthracite/[0.08] object-cover"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-[28px] border border-anthracite/[0.08] bg-white p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#728B75]/14 px-3 py-[6px] font-rubik text-[10px] uppercase tracking-[1.5px] text-[#728B75]">
                  Homemade
                </span>
                <span className="rounded-full bg-[#D4A373]/18 px-3 py-[6px] font-rubik text-[10px] uppercase tracking-[1.5px] text-[#2D3436]">
                  Made in France
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-cormorant text-[62px] leading-[0.9] tracking-[-1px] text-anthracite md:text-[78px]">
                  Harnais Atelier
                </h1>
                <p className="font-sacramento text-[42px] leading-[0.9] text-moutarde">pièce signature</p>
              </div>

              <p className="font-rubik text-[16px] leading-[1.65] text-anthracite/80">
                Un harnais couture pensé pour le quotidien élégant: maintien doux, ajustement précis et finitions
                premium pour accompagner chaque balade avec style.
              </p>

              <div className="flex items-end justify-between border-b border-anthracite/12 pb-5">
                <div className="flex items-center gap-[6px] text-moutarde">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                  <span className="ml-1 font-rubik text-[12px] text-anthracite/62">(124 avis)</span>
                </div>
                <p className="font-rubik text-[34px] font-semibold text-anthracite">124€</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <p className="w-10 font-rubik text-[11px] uppercase tracking-[1.5px] text-[#728B75]">Taille</p>
                  <div className="flex gap-2">
                    {['S', 'M', 'L'].map((size) => (
                      <button
                        key={size}
                        className={`h-9 min-w-9 rounded-full border px-3 font-rubik text-[11px] uppercase tracking-[1.4px] ${
                          size === 'M'
                            ? 'border-anthracite bg-anthracite text-white'
                            : 'border-anthracite/18 bg-white text-anthracite'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="w-10 font-rubik text-[11px] uppercase tracking-[1.5px] text-[#728B75]">Qté</p>
                  <div className="flex h-10 items-center rounded-full border border-anthracite/20 bg-sable px-3">
                    <Minus size={14} />
                    <span className="px-4 font-rubik text-[12px]">1</span>
                    <Plus size={14} />
                  </div>
                </div>
              </div>

              <a
                href={withBase('/product')}
                className="mt-1 flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#2D3436] font-rubik text-[10px] uppercase tracking-[0.18em] !text-white no-underline visited:!text-white hover:!text-white"
              >
                Ajouter + <ShoppingBag size={14} />
              </a>

              <div className="grid grid-cols-1 gap-2 border-t border-anthracite/12 pt-4 md:grid-cols-3">
                <p className="flex items-center gap-2 font-rubik text-[11px] uppercase tracking-[1.3px] text-[#728B75]">
                  <Truck size={14} className="text-[#D4A373]" /> Expédition 48h
                </p>
                <p className="flex items-center gap-2 font-rubik text-[11px] uppercase tracking-[1.3px] text-[#728B75]">
                  <ShieldCheck size={14} className="text-[#D4A373]" /> Paiement sécurisé
                </p>
                <p className="flex items-center gap-2 font-rubik text-[11px] uppercase tracking-[1.3px] text-[#728B75]">
                  <Bone size={14} className="text-[#D4A373]" /> Retour sous 14 jours
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-[1260px] gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[24px] border border-anthracite/[0.08] bg-white p-6 md:p-8">
            <h2 className="font-cormorant text-[56px] leading-[0.92] tracking-[-0.8px] text-anthracite">
              Détails & fabrication
            </h2>
            <p className="mt-3 font-rubik text-[15px] leading-[1.7] text-anthracite/78">
              Chaque harnais est découpé et assemblé dans notre atelier, en petite série, avec un contrôle qualité
              individuel avant expédition.
            </p>
            <ul className="mt-5 space-y-3">
              {specs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <PawPrint size={14} className="mt-[3px] rotate-[310deg] text-[#728B75]" fill="currentColor" />
                  <span className="font-rubik text-[14px] leading-[1.5] text-anthracite/85">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[24px] border border-anthracite/[0.08] bg-vieuxrose p-6 md:p-8">
            <p className="font-sacramento text-[44px] leading-[0.9] text-moutarde">conseil atelier</p>
            <h3 className="mt-2 font-cormorant text-[46px] leading-[0.92] text-anthracite">Guide des tailles</h3>
            <p className="mt-3 font-rubik text-[15px] leading-[1.65] text-anthracite/80">
              Si votre chien se situe entre deux tailles, privilégiez la plus grande pour conserver une liberté de
              mouvement optimale.
            </p>
            <button className="mt-5 h-10 rounded-full bg-[#728B75] px-5 font-rubik text-[11px] uppercase tracking-[1.5px] text-white">
              Voir le guide complet
            </button>
          </article>
        </section>

        <section className="mx-auto mt-14 max-w-[1260px]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-sacramento text-[48px] leading-[0.9] text-moutarde">compléter le look</p>
              <h2 className="font-cormorant text-[64px] leading-[0.9] tracking-[-1px] text-anthracite">
                Vous aimerez aussi
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <article key={item.name} className="overflow-hidden rounded-[22px] border border-anthracite/[0.08] bg-white">
                <img src={withBase(item.image)} alt={item.name} className="h-[250px] w-full object-cover" />
                <div className="p-5">
                  <p className="font-rubik text-[10px] uppercase tracking-[1.4px] text-[#728B75]">{item.category}</p>
                  <h3 className="mt-2 font-cormorant text-[38px] leading-[0.92] text-anthracite">{item.name}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="font-rubik text-[24px] font-semibold text-anthracite">{item.price}</p>
                    <a
                      href={withBase('/product')}
                      className="inline-flex h-9 items-center justify-center rounded-full px-4 font-rubik text-[10px] uppercase tracking-[0.18em] !text-white no-underline visited:!text-white hover:!text-white"
                      style={{ backgroundColor: index % 2 === 0 ? '#D4A373' : '#2D3436' }}
                    >
                      Ajouter +
                    </a>
                  </div>
                </div>
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

export default ProductPage
