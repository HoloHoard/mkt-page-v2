import { Github, Twitter, MessageCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F0F1A] py-12 md:py-16 border-t border-[#B766FF]/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-10">
          <a 
            href="#features" 
            className="text-gray-400 hover:text-white transition-colors font-medium hover:underline decoration-[#B766FF] underline-offset-4"
          >
            HoloHoard Features
          </a>
          <a 
            href="#about" 
            className="text-gray-400 hover:text-white transition-colors font-medium hover:underline decoration-[#B766FF] underline-offset-4"
          >
            About
          </a>
          <a 
            href="#privacy" 
            className="text-gray-400 hover:text-white transition-colors font-medium hover:underline decoration-[#B766FF] underline-offset-4"
          >
            Privacy Policy
          </a>
          <a 
            href="#contact" 
            className="text-gray-400 hover:text-white transition-colors font-medium hover:underline decoration-[#B766FF] underline-offset-4"
          >
            Contact
          </a>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-3xl mx-auto mb-8 md:mb-10">
          <div className="bg-[#1A1A2E] border border-gray-700/30 rounded-xl p-6">
            <p className="text-gray-400 text-xs md:text-sm text-center leading-relaxed">
              HoloHoard is not affiliated with or endorsed by any trading card game publisher. 
              All trading card game names, logos, and brands are property of their respective owners. 
              Card prices are estimates based on market data and should not be considered official valuations.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-700/30">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#12D3FF] via-[#B766FF] to-[#669CFF] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg">H</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">HoloHoard</div>
              <div className="text-gray-500 text-xs">Free TCG Collection Tracker</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 HoloHoard | All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="#twitter" 
              className="w-10 h-10 rounded-xl bg-[#1A1A2E] border border-gray-700/30 hover:border-[#12D3FF]/50 flex items-center justify-center text-gray-400 hover:text-[#12D3FF] transition-all hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#discord" 
              className="w-10 h-10 rounded-xl bg-[#1A1A2E] border border-gray-700/30 hover:border-[#B766FF]/50 flex items-center justify-center text-gray-400 hover:text-[#B766FF] transition-all hover:scale-110"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href="#github" 
              className="w-10 h-10 rounded-xl bg-[#1A1A2E] border border-gray-700/30 hover:border-[#669CFF]/50 flex items-center justify-center text-gray-400 hover:text-[#669CFF] transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#email" 
              className="w-10 h-10 rounded-xl bg-[#1A1A2E] border border-gray-700/30 hover:border-[#FF1F8E]/50 flex items-center justify-center text-gray-400 hover:text-[#FF1F8E] transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
