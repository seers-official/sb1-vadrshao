import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Disc as Discord, Twitter, Instagram, Youtube, Gamepad2, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-accent/10">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex-shrink-0 transition-transform hover:scale-105 duration-300"
            aria-label="Home"
          >
            <img 
              src="https://ardorcompany.com/cdn/shop/files/black.gif?v=1729192575&width=80" 
              alt="ardor*" 
              className="w-12 h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about-artist', label: 'About Artist' },
              { path: '/shop-rl', label: 'Shop RL' },
              { path: '/virtual-realm', label: 'Virtual Realm' },
              { path: '/ardor-archive', label: 'ardor archive*' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link relative px-3 py-2 text-sm transition-all duration-300
                  ${location.pathname === path ? 'text-accent' : 'text-secondary hover:text-accent'}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px]
                  after:bg-accent after:transition-all after:duration-300
                  ${location.pathname === path ? 'after:w-full' : 'hover:after:w-full'}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center">
            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4 mr-6">
              {[
                { Icon: Discord, href: 'https://discord.gg', label: 'Discord' },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: Gamepad2, href: 'https://tiktok.com', label: 'TikTok' },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { Icon: Camera, href: 'https://flickr.com', label: 'Flickr' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary/70 hover:text-accent transition-colors duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* User and Cart */}
            <div className="flex items-center space-x-4 mr-4">
              <Link
                to="/account"
                className="text-secondary/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Account"
              >
                <User size={18} />
              </Link>
              <Link
                to="/cart"
                className="text-secondary/70 hover:text-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-secondary/70 hover:text-accent transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-accent/10 bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="py-4">
              <div className="flex flex-col space-y-4">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about-artist', label: 'About Artist' },
                  { path: '/shop-rl', label: 'Shop RL' },
                  { path: '/virtual-realm', label: 'Virtual Realm' },
                  { path: '/ardor-archive', label: 'ardor archive*' }
                ].map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`px-4 py-2 text-lg transition-colors duration-300
                      ${location.pathname === path ? 'text-accent' : 'text-secondary hover:text-accent'}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Social Media Icons - Mobile */}
              <div className="flex items-center space-x-6 mt-6 pt-4 px-4 border-t border-accent/10">
                {[
                  { Icon: Discord, href: 'https://discord.gg', label: 'Discord' },
                  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { Icon: Gamepad2, href: 'https://tiktok.com', label: 'TikTok' },
                  { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                  { Icon: Camera, href: 'https://flickr.com', label: 'Flickr' }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary/70 hover:text-accent transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}