import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutArtist from './pages/AboutArtist';
import ShopRL from './pages/ShopRL';
import VirtualRealm from './pages/VirtualRealm';
import ArdorArchive from './pages/ArdorArchive';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-artist" element={<AboutArtist />} />
          <Route path="shop-rl" element={<ShopRL />} />
          <Route path="virtual-realm" element={<VirtualRealm />} />
          <Route path="ardor-archive" element={<ArdorArchive />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;