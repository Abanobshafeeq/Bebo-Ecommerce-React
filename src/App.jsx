import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import BtmHeader from './components/header/BtmHeader';
import TopHeader from './components/header/Topheader';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import SearchResults from './pages/SearchResults';
import Favorites from './pages/favorites/Favorites';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster position="bottom-right" reverseOrder={false} />

      <ScrollToTop />
      <PageTransition />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={ <SearchResults />} />
          <Route path="/favorites" element={ <Favorites />} />

        </Routes>
      </AnimatePresence>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
