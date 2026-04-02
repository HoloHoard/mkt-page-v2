import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1A1A2E]/95 backdrop-blur-xl border-b border-[#B766FF]/20 shadow-lg shadow-purple-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#12D3FF] via-[#B766FF] to-[#669CFF] rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-white font-black text-lg md:text-xl relative z-10">H</span>
          </div>
          <span className="text-white font-bold text-lg md:text-xl group-hover:text-[#12D3FF] transition-colors">
            HoloHoard
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          <Link 
            to="/features" 
            className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-2 rounded-lg transition-all font-medium"
          >
            Features
          </Link>
          <Link 
            to="/faq" 
            className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-2 rounded-lg transition-all font-medium"
          >
            FAQ
          </Link>
          <a 
            href="#ideas" 
            className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-2 rounded-lg transition-all font-medium"
          >
            Ideas & Feedback
          </a>
          <a 
            href="#blog" 
            className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-2 rounded-lg transition-all font-medium"
          >
            TCG Blog
          </a>
        </div>

        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-gradient-to-r from-[#B766FF] to-[#669CFF] text-white px-6 py-2.5 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all text-sm md:text-base">
          Start Collecting
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:bg-[#252538] rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A2E]/98 backdrop-blur-xl border-t border-[#B766FF]/20">
          <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-3 rounded-lg transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-3 rounded-lg transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <a 
              href="#ideas" 
              className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-3 rounded-lg transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ideas & Feedback
            </a>
            <a 
              href="#blog" 
              className="text-gray-300 hover:text-white hover:bg-[#252538] px-4 py-3 rounded-lg transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TCG Blog
            </a>
            <button className="bg-gradient-to-r from-[#B766FF] to-[#669CFF] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all mt-2">
              Start Collecting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
