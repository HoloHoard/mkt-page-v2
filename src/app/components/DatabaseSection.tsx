import { ImageWithFallback } from './figma/ImageWithFallback';
import { Database, Sparkles, TrendingUp } from 'lucide-react';

export function DatabaseSection() {
  return (
    <section className="bg-[#1A1A2E] py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FF1F8E]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Card Grid with stats */}
          <div className="relative flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1F8E]/30 via-[#B766FF]/30 to-[#12D3FF]/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Main card container */}
              <div className="relative w-full h-full rounded-[30%] overflow-hidden bg-gradient-to-br from-[#FF1F8E]/20 via-[#B766FF]/20 to-[#12D3FF]/20 p-1 backdrop-blur-sm border border-white/10">
                <div className="w-full h-full rounded-[30%] overflow-hidden">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1708856034064-5dfabd9bfe95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZCUyMGdhbWUlMjBjYXJkcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzc0NDMxMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Card Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-[#252538] border border-[#12D3FF]/30 rounded-2xl p-4 shadow-lg shadow-cyan-500/20 backdrop-blur-sm">
                <Database className="w-6 h-6 text-[#12D3FF] mb-2" />
                <div className="text-white font-black text-2xl">15K+</div>
                <div className="text-gray-400 text-xs">Total Cards</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#252538] border border-[#B766FF]/30 rounded-2xl p-4 shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-[#B766FF] mb-2" />
                <div className="text-white font-black text-2xl">1K+</div>
                <div className="text-gray-400 text-xs">Parallels</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-[#252538] border border-[#FF1F8E]/30 rounded-2xl p-4 shadow-lg shadow-pink-500/20 backdrop-blur-sm hidden md:block">
                <TrendingUp className="w-6 h-6 text-[#FF1F8E] mb-2" />
                <div className="text-white font-black text-2xl">Daily</div>
                <div className="text-gray-400 text-xs">Updates</div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div className="inline-block">
              <div className="px-4 py-2 bg-gradient-to-r from-[#FF1F8E]/20 to-[#B766FF]/20 border border-[#FF1F8E]/30 rounded-full">
                <span className="text-[#FF1F8E] font-bold text-sm uppercase tracking-wider">Database</span>
              </div>
            </div>

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] via-[#B766FF] to-[#12D3FF] text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_0_30px_rgba(255,31,142,0.3)]">
              The most updated card database
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              From the latest releases to niche promo cards, our community-maintained database 
              ensures you have access to comprehensive card information and pricing data.
            </p>
            
            {/* Feature badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#252538] border border-[#12D3FF]/20 rounded-xl p-4 hover:border-[#12D3FF]/40 transition-all">
                <div className="text-[#12D3FF] font-black text-3xl mb-1">15K+</div>
                <div className="text-gray-400 text-sm">cards & parallels</div>
              </div>
              <div className="bg-[#252538] border border-[#B766FF]/20 rounded-xl p-4 hover:border-[#B766FF]/40 transition-all">
                <div className="text-[#B766FF] font-black text-3xl mb-1">7</div>
                <div className="text-gray-400 text-sm">TCG franchises</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="relative bg-gradient-to-r from-[#FF1F8E] to-[#B766FF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Explore cards</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
