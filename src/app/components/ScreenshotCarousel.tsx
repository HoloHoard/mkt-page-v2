import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';

export function ScreenshotCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    { 
      url: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0MzY0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      label: 'Dashboard'
    },
    { 
      url: 'https://images.unsplash.com/photo-1593358185687-129b6eedb3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB1aSUyMGNvbGxlY3Rpb24lMjBncmlkfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      label: 'Collection Grid'
    },
    { 
      url: 'https://images.unsplash.com/photo-1691256676376-357c3aa66c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      label: 'Card Details'
    },
    { 
      url: 'https://images.unsplash.com/photo-1762340277643-b9b9e621eee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      label: 'Add Cards'
    },
    { 
      url: 'https://images.unsplash.com/photo-1640271204756-6bf55641d9fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwY2FyZCUyMGNvbGxlY3Rpb24lMjBwb2tlbW9ufGVufDF8fHx8MTc3NDQyODkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      label: 'Analytics'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="bg-[#1A1A2E] py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B766FF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#12D3FF]/30 to-transparent" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B766FF]/20 to-[#12D3FF]/20 border border-[#B766FF]/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#B766FF]" fill="currentColor" />
            <span className="text-[#B766FF] font-bold text-sm uppercase tracking-wider">100% Free</span>
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Start Collecting Today
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Join thousands of collectors managing their TCG collections with HoloHoard
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-[#252538] border border-[#B766FF]/20 hover:border-[#B766FF]/40 hover:bg-[#2A2A42] transition-all flex-shrink-0 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden scrollbar-hide px-4 md:px-0 pb-4 md:pb-0">
              {screenshots.map((screenshot, index) => {
                const position = (index - currentSlide + screenshots.length) % screenshots.length;
                const isVisible = position < 3;
                const isCenter = position === 1;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isVisible ? 1 : 0,
                      scale: isCenter ? 1.05 : 1,
                      filter: isCenter ? 'blur(0px)' : 'blur(0.5px)'
                    }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-[240px] md:w-[280px] ${
                      isVisible ? 'block' : 'hidden md:block'
                    }`}
                  >
                    <div className={`relative group cursor-pointer transition-all ${
                      isCenter ? 'scale-105' : ''
                    }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      {/* Glow effect for center card */}
                      {isCenter && (
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#B766FF]/30 via-[#12D3FF]/30 to-[#669CFF]/30 rounded-3xl blur-xl" />
                      )}
                      
                      <div className={`relative border-2 rounded-2xl p-2 transition-all ${
                        isCenter 
                          ? 'border-[#B766FF]/50 bg-[#252538]' 
                          : 'border-gray-700/30 bg-[#1A1A2E] group-hover:border-[#B766FF]/30'
                      }`}>
                        <div className="aspect-[9/16] rounded-xl overflow-hidden bg-[#0F0F1A] relative">
                          <ImageWithFallback 
                            src={screenshot.url}
                            alt={screenshot.label}
                            className="w-full h-full object-cover"
                          />
                          {/* Label overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/80 to-transparent p-4">
                            <span className="text-white font-bold text-sm">{screenshot.label}</span>
                          </div>
                        </div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-2xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={nextSlide}
              className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-[#252538] border border-[#B766FF]/20 hover:border-[#B766FF]/40 hover:bg-[#2A2A42] transition-all flex-shrink-0 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-[#B766FF] to-[#12D3FF] w-8' 
                    : 'bg-gray-600 w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="relative bg-gradient-to-r from-[#B766FF] to-[#669CFF] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Create your free account</span>
          </button>
        </div>
      </div>
    </section>
  );
}
