import { ImageWithFallback } from './figma/ImageWithFallback';
import { Smartphone, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function AppCTASection() {
  return (
    <section className="bg-[#0F0F1A] py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B766FF]/5 via-transparent to-[#12D3FF]/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#669CFF]/10 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#669CFF]/20 to-[#12D3FF]/20 border border-[#12D3FF]/30 rounded-full">
              <Zap className="w-4 h-4 text-[#12D3FF]" fill="currentColor" />
              <span className="text-[#12D3FF] font-bold text-sm uppercase tracking-wider">Coming Soon</span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              iOS & Android App
            </h2>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#252538] border border-[#12D3FF]/30 rounded-xl px-4 py-2">
                <Smartphone className="w-5 h-5 text-[#12D3FF]" />
                <span className="text-white font-bold">Native apps</span>
              </div>
              <div className="flex items-center gap-2 bg-[#252538] border border-[#B766FF]/30 rounded-xl px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-[#B766FF] animate-pulse" />
                <span className="text-white font-bold">Real-time sync</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Create your HoloHoard account today and get automatic access to our mobile apps 
              when they launch. Track your collection on the go with <span className="text-[#12D3FF] font-semibold">seamless sync</span> across all devices.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {['Scan cards with camera', 'Offline mode support', 'Push notifications for price alerts'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#12D3FF] to-[#669CFF] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="relative bg-gradient-to-r from-[#669CFF] to-[#12D3FF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Get early access</span>
            </button>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative flex items-center justify-center h-[450px] md:h-[550px]">
            <div className="relative w-full h-full">
              {/* Glow effects */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#669CFF]/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#12D3FF]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Back phone */}
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [10, 13, 10]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-[45%] h-[75%]"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/30 border-2 border-[#12D3FF]/30 bg-gradient-to-br from-[#1A1A2E] to-[#252538] p-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1762340277643-b9b9e621eee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mobile App Interface"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </motion.div>
              
              {/* Front phone */}
              <motion.div 
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [-6, -3, -6]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-[12%] left-0 w-[52%] h-[85%] z-10"
              >
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/30 border-2 border-[#669CFF]/30 bg-gradient-to-br from-[#1A1A2E] to-[#252538] p-1">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1691256676376-357c3aa66c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mobile App"
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
