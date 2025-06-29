
import { Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mocha-900 text-cream-100 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Brew Your Mood</h3>
          <p className="text-cream-200 text-lg">
            Crafted with code & caffeine by Shreyasi
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="flex items-center space-x-2 text-cream-200 hover:text-caramel-400 transition-colors"
          >
            <span className="text-2xl">🎵</span>
            <span>Spotify</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-cream-200 hover:text-caramel-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-cream-200 hover:text-caramel-400 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <a
            href="mailto:contact@brewyourmood.com"
            className="text-caramel-400 hover:text-caramel-300 transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-mocha-800 pt-8 text-cream-300 text-sm">
          <p>&copy; 2024 Brew Your Mood. Made with ❤️ and ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;