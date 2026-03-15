import HomeClassic from './HomeClassic.jsx'
import ProductPage from './ProductPage.jsx'
import BoutiquePage from './BoutiquePage.jsx'
import ContactPage from './ContactPage.jsx'
import JournalPage from './JournalPage.jsx'
import GangPage from './GangPage.jsx'
import PanierPage from './PanierPage.jsx'

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '')
  const isProductRoute =
    pathname === '/produit' ||
    pathname.endsWith('/produit') ||
    pathname === '/product' ||
    pathname.endsWith('/product')
  const isBoutiqueRoute = pathname === '/boutique' || pathname.endsWith('/boutique')
  const isContactRoute = pathname === '/contact' || pathname.endsWith('/contact')
  const isJournalRoute = pathname === '/journal' || pathname.endsWith('/journal')
  const isGangRoute = pathname === '/gang' || pathname.endsWith('/gang')
  const isPanierRoute = pathname === '/panier' || pathname.endsWith('/panier')

  if (isProductRoute) return <ProductPage />
  if (isBoutiqueRoute) return <BoutiquePage />
  if (isContactRoute) return <ContactPage />
  if (isJournalRoute) return <JournalPage />
  if (isGangRoute) return <GangPage />
  if (isPanierRoute) return <PanierPage />
  return <HomeClassic />
}

export default App
