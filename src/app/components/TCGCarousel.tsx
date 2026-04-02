import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TCGCarousel() {
  const tcgs = [
    {
      name: "Pokémon TCG",
      image:
        "https://images.unsplash.com/photo-1613771404738-65d22f979710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwdHJhZGluZyUyMGNhcmQlMjBnYW1lJTIwbG9nb3xlbnwxfHx8fDE3NzQ0MzExMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true,
    },
    { name: "Bitcoin Trading Cards" },
    {
      name: "Gundam",
      image:
        "https://images.unsplash.com/photo-1636391671189-b74857c38626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dWdpb2glMjBjYXJkJTIwZ2FtZSUyMGxvZ298ZW58MXx8fHwxNzc0NDMxMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    { name: "Cardsmiths Currency" },
    { name: "Panini Minecraft" },
    { name: "Pokémon MEZASTAR" },
    { name: "Cardsmiths Space" },
    { name: "Godzilla" },
  ];

  return (
    <section className="bg-[#0F0F1A] py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B766FF]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-gradient-to-r from-[#B766FF]/20 to-[#12D3FF]/20 border border-[#B766FF]/30 rounded-full">
              <span className="text-[#12D3FF] font-bold text-sm uppercase tracking-wider">
                Supported Games
              </span>
            </div>
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Fully Supported TCGs
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            We are constantly adding new sets to the platform. Want us to add a
            game? Drop us a line!
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {tcgs.map((tcg, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl overflow-hidden transition-all duration-300
                ${
                  tcg.featured
                    ? "bg-gradient-to-br from-[#B766FF]/20 to-[#669CFF]/20 border-2 border-[#B766FF]/50 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
                    : "bg-[#1A1A2E] border border-gray-700/30 hover:border-[#12D3FF]/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-105"
                }
              `}
            >
              {tcg.image ? (
                <div className="aspect-[16/9] relative overflow-hidden">
                  <ImageWithFallback
                    src={tcg.image}
                    alt={tcg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-white font-bold text-sm md:text-base drop-shadow-lg">
                      {tcg.name}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="aspect-[16/9] flex items-center justify-center p-6">
                  <span
                    className={`font-bold text-sm md:text-base text-center ${
                      tcg.featured
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    } transition-colors`}
                  >
                    {tcg.name}
                  </span>
                </div>
              )}

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#1A1A2E] border border-[#B766FF]/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#252538] hover:border-[#B766FF]/60 transition-all hover:shadow-lg hover:shadow-purple-500/20">
            Request a game
          </button>
        </div>
      </div>
    </section>
  );
}
