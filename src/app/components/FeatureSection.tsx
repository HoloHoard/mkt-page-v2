import { ReactNode } from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeatureSectionProps {
  title: string;
  titleColor: 'cyan' | 'pink' | 'purple';
  description: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  backgroundColor?: 'dark' | 'darker';
  children?: ReactNode;
}

export function FeatureSection({
  title,
  titleColor,
  description,
  features,
  imageUrl,
  imageAlt,
  imagePosition,
  backgroundColor = 'dark',
  children
}: FeatureSectionProps) {
  const bgColor = backgroundColor === 'dark' ? 'bg-[#0F0F1A]' : 'bg-[#1A1A2E]';
  const titleColorClass = 
    titleColor === 'cyan' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#12D3FF] to-[#39DAFF]' : 
    titleColor === 'pink' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] to-[#FF5FAB]' :
    'text-transparent bg-clip-text bg-gradient-to-r from-[#B766FF] to-[#C37FFF]';

  const textContent = (
    <div className="space-y-6 md:space-y-8">
      <h2 className={`${titleColorClass} text-3xl md:text-4xl lg:text-5xl font-black leading-tight drop-shadow-[0_0_30px_rgba(183,102,255,0.3)]`}>
        {title}
      </h2>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 bg-[#252538] border border-[#B766FF]/20 px-4 py-2.5 rounded-xl hover:border-[#B766FF]/40 hover:bg-[#2A2A42] transition-all group"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#12D3FF] to-[#669CFF] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <span className="text-white font-semibold text-sm md:text-base">{feature}</span>
          </div>
        ))}
      </div>
      {children}
    </div>
  );

  const imageContent = (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[300px] md:max-w-[380px] group">
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#B766FF]/20 via-[#12D3FF]/20 to-[#669CFF]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
        
        <div className="relative aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#B766FF] via-[#669CFF] to-[#12D3FF] p-[2px] group-hover:scale-105 transition-transform">
          <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#0F0F1A]">
            <ImageWithFallback 
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${bgColor} py-16 md:py-24 relative overflow-hidden`}>
      {/* Background effects */}
      <div className={`absolute ${imagePosition === 'right' ? 'left-0' : 'right-0'} top-1/2 w-96 h-96 bg-gradient-to-br from-[#B766FF]/5 to-transparent rounded-full blur-3xl`} />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
