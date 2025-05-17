import { Link } from 'react-router-dom';
import { Globe, Mail, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-accent/20 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-lg font-mono">ardor*</span>
            </div>
            <p className="text-secondary/70 mb-4">
              Imagination fueled, ardor driven.*
            </p>
            <div className="flex space-x-3">
              <a href="https://twitter.com" className="text-secondary/70 hover:text-accent" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-secondary/70 hover:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-secondary/70 hover:text-accent" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com" className="text-secondary/70 hover:text-accent" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-mono mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary/70 hover:text-accent">Home</Link></li>
              <li><Link to="/about-artist" className="text-secondary/70 hover:text-accent">About Artist</Link></li>
              <li><Link to="/shop-rl" className="text-secondary/70 hover:text-accent">Shop RL</Link></li>
              <li><Link to="/virtual-realm" className="text-secondary/70 hover:text-accent">Virtual Realm</Link></li>
              <li><Link to="/ardor-archive" className="text-secondary/70 hover:text-accent">ardor archive*</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-mono mb-4">Contact</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:jay@ardorcompany.com" className="text-secondary/70 hover:text-accent">jay@ardorcompany.com</a>
            </div>
            <p className="text-secondary/70">
              For business inquiries, please use the contact form or email directly.
            </p>
            <button className="btn mt-4">Contact</button>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary/50 text-sm">
            &copy; {new Date().getFullYear()} ardor* company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-secondary/50">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}