import { FeatureSection } from "../components/FeatureSection";
import { Check } from "lucide-react";

export function Features() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#251433] via-[#1A1A2E] to-[#141F33] py-20 md:py-32 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B766FF]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-gradient-to-r from-[#B766FF]/20 to-[#669CFF]/20 border border-[#B766FF]/30 rounded-full">
                <span className="text-[#12D3FF] font-bold text-sm uppercase tracking-wider">
                  All Features
                </span>
              </div>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Everything you need to
              <br />
              manage your TCG collection
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              From tracking individual cards to managing multiple collections
              across different games, HoloHoard has all the features you need to
              be a serious collector.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid Overview */}
      <section className="bg-[#0F0F1A] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: "📊",
                title: "Collection Dashboard",
                description:
                  "View your entire collection at a glance with completion stats and value tracking",
                color: "cyan",
              },
              {
                icon: "🎴",
                title: "Card Database",
                description:
                  "Access over 15,000 cards, parallels, and inserts from multiple TCGs",
                color: "purple",
              },
              {
                icon: "✨",
                title: "Parallel Support",
                description:
                  "Track every variant, from base cards to rare serialised parallels",
                color: "pink",
              },
              {
                icon: "🏆",
                title: "Graded Cards",
                description:
                  "Full support for PSA, BGS, CGC and other grading companies",
                color: "blue",
              },
              {
                icon: "💰",
                title: "Price Tracking",
                description:
                  "Monitor market values and track your collection investment",
                color: "cyan",
              },
              {
                icon: "🔗",
                title: "Share Collections",
                description:
                  "Generate shareable links for trading, selling, or showing off",
                color: "purple",
              },
              {
                icon: "📝",
                title: "Custom Notes",
                description:
                  "Add personal notes, photos, and details to any card",
                color: "pink",
              },
              {
                icon: "📈",
                title: "Analytics",
                description:
                  "Detailed insights into your collecting habits and spending",
                color: "blue",
              },
              {
                icon: "🎯",
                title: "Want Lists",
                description:
                  "Track cards you need and get alerts when prices drop",
                color: "cyan",
              },
              {
                icon: "📈",
                title: "Market Intel",
                description:
                  "We scan secondary markets so you can find the best prices",
                color: "cyan",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#1A1A2E] p-6 md:p-8 rounded-2xl border border-gray-700/30 hover:border-[#B766FF]/50 transition-all hover:scale-105 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B766FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#12D3FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <FeatureSection
        title="All-in-One Collection Manager"
        titleColor="cyan"
        description="Track every card in your collection with precision. Log pulls, trades, and purchases while monitoring your spending and collection value over time."
        features={[
          "Log every pull, trade or buy",
          "Track spend and value",
          "Find deals for missing cards",
        ]}
        imageUrl="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0MzY0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Collection Manager"
        imagePosition="right"
        backgroundColor="dark"
      />

      <FeatureSection
        title="Detailed, Down to the Last Foil"
        titleColor="pink"
        description="Support for graded cards, autographs, print errors, and every parallel imaginable. Track condition, pricing, and add custom notes and media to each card."
        features={[
          "Parallels and serialised",
          "Raw, graded and autographed",
          "Add custom notes and media",
        ]}
        imageUrl="https://images.unsplash.com/photo-1762340277643-b9b9e621eee2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBmb3JtJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Card Details Form"
        imagePosition="left"
        backgroundColor="darker"
      />

      <FeatureSection
        title="Full Support for Parallels, Serialised, and Inserts"
        titleColor="cyan"
        description="Easily manage variants with our smart stacking feature. Toggle between viewing all variants or just your unique cards. Perfect for collectors who chase every parallel."
        features={[
          "Stack variants together",
          "Track serialised numbers",
          "Manage insert sets",
        ]}
        imageUrl="https://images.unsplash.com/photo-1593358185687-129b6eedb3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjB1aSUyMGNvbGxlY3Rpb24lMjBncmlkfGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Parallels View"
        imagePosition="right"
        backgroundColor="dark"
      />

      <FeatureSection
        title="Share your collection"
        titleColor="pink"
        description="Generate shareable links to show off your collection, facilitate trades, or list cards for sale. You control exactly what others can see with granular sharing permissions."
        features={[
          "Public or private sharing",
          "Control viewing permissions",
          "Perfect for trading",
        ]}
        imageUrl="https://images.unsplash.com/photo-1691256676376-357c3aa66c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3NDQyODkzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Shared Collection View"
        imagePosition="left"
        backgroundColor="darker"
      />

      <FeatureSection
        title="Monitor Your Hoard's Stats and Value"
        titleColor="cyan"
        description="Beautiful dashboard showing collection completion percentages, total value, recent acquisitions, and trending cards. Watch your collection grow with real-time market pricing."
        features={[
          "Track collection value",
          "Completion percentages",
          "Market price tracking",
        ]}
        imageUrl="https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0MzY0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        imageAlt="Stats Dashboard"
        imagePosition="right"
        backgroundColor="dark"
      />

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#251433] via-[#1A1A2E] to-[#141F33] py-16 md:py-20 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#B766FF]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/20 to-transparent rounded-full blur-3xl" />

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-6">
            Ready to start collecting?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of collectors managing their TCG collections with
            HoloHoard. It's{" "}
            <span className="text-[#12D3FF] font-bold">completely free</span> to
            get started.
          </p>
          <button className="relative bg-gradient-to-r from-[#FF1F8E] to-[#B766FF] text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Start Collecting Now</span>
          </button>
        </div>
      </section>
    </div>
  );
}
