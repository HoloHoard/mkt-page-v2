import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const cyclingWords = ['Pokémon', 'Magic', 'Yu-Gi-Oh!', 'pulls', 'hoard'];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pb-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#251433] via-[#1A1A2E] to-[#141F33] opacity-90" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B766FF]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-[#669CFF]/20 to-transparent rounded-full blur-3xl animate-pulse delay-2000" style={{ animationDelay: '2s' }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            {/* Animated Cycling Text */}
            <div className="flex items-center gap-3 h-12 md:h-14">
              <span className="text-[#12D3FF] text-2xl md:text-3xl lg:text-[44px] font-black">
                Track your
              </span>
              <div className="relative min-w-[180px] md:min-w-[240px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-[#B766FF] via-[#C37FFF] to-[#CF99FF] text-2xl md:text-3xl lg:text-[44px] font-black whitespace-nowrap drop-shadow-[0_0_15px_rgba(183,102,255,0.5)]"
                  >
                    {cyclingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Hero Headline */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-[80px] leading-tight font-black tracking-tight">
              Your new TCG<br />companion
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
              HoloHoard is the <span className="text-[#12D3FF] font-semibold">free</span> trading card collection tracker for TCG collectors. 
              Organize, value, and share your cards across multiple sets, games and franchises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button className="relative bg-gradient-to-r from-[#FF1F8E] to-[#FF5FAB] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10">Explore cards</span>
              </button>
              <button className="relative bg-[#1A1A2E] border-2 border-[#B766FF]/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#252538] hover:border-[#B766FF] transition-all hover:shadow-lg hover:shadow-purple-500/20">
                Sign up
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="space-y-1">
                <div className="text-[#12D3FF] text-3xl font-black">15K+</div>
                <div className="text-gray-400 text-sm">Cards tracked</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#B766FF] text-3xl font-black">7</div>
                <div className="text-gray-400 text-sm">TCGs supported</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#669CFF] text-3xl font-black">100%</div>
                <div className="text-gray-400 text-sm">Free forever</div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative h-[400px] md:h-[550px] hidden md:block">
            <div className="relative w-full h-full">
              {/* Glow effects behind phones */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B766FF]/30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#12D3FF]/30 rounded-full blur-3xl" />
              
              {/* Back phone - rotated */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [12, 15, 12]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[45%] h-[80%]"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-[#B766FF]/20 bg-gradient-to-br from-[#1A1A2E] to-[#252538] p-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1593358185687-129b6eedb3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB1aSUyMGNvbGxlY3Rpb24lMjBncmlkfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="App Interface"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Front phone */}
              <motion.div 
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [-8, -5, -8]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-[15%] left-0 w-[50%] h-[85%] z-10"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/30 border border-[#12D3FF]/20 bg-gradient-to-br from-[#1A1A2E] to-[#252538] p-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0MzY0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="App Dashboard"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
