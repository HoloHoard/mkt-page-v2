import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-700/30 rounded-2xl overflow-hidden bg-[#1A1A2E] hover:border-[#B766FF]/30 transition-all">
      <button
        onClick={onToggle}
        className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-[#252538] transition-colors group"
      >
        <span className="text-white text-lg md:text-xl font-bold pr-4 group-hover:text-[#12D3FF] transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-lg bg-[#252538] border border-[#12D3FF]/30 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-[#12D3FF]/20 ${
          isOpen ? 'rotate-180 border-[#12D3FF]' : ''
        }`}>
          <ChevronDown className="w-5 h-5 text-[#12D3FF]" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 text-gray-300 text-base md:text-lg leading-relaxed border-t border-gray-700/30 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is HoloHoard really free?',
      answer: 'Yes! HoloHoard is 100% free to use. We believe every collector should have access to powerful collection management tools regardless of budget. We may introduce optional premium features in the future, but core functionality will always remain free.'
    },
    {
      question: 'Which trading card games are supported?',
      answer: 'We currently support Pokemon, Magic: The Gathering, Yu-Gi-Oh!, Cardsmiths Currency, Cardsmiths Space, Panini Minecraft, Bitcoin Trading Cards, and many more. We\'re constantly adding new games and sets based on community feedback. If you don\'t see your game, let us know!'
    },
    {
      question: 'How do you determine card prices?',
      answer: 'Our pricing data is aggregated from multiple trusted sources including recent sales data, marketplace listings, and auction results. Prices are updated regularly to reflect current market conditions. However, prices should be used as estimates only and may vary based on card condition and market fluctuations.'
    },
    {
      question: 'Can I track graded cards?',
      answer: 'Absolutely! HoloHoard has full support for graded cards from PSA, BGS, CGC, and other major grading companies. You can log the grade, grading company, certification number, and even track how grading affects the value of your cards.'
    },
    {
      question: 'How does collection sharing work?',
      answer: 'You can generate a unique shareable link for any of your collections. You control what information is visible (card names, values, notes, etc.) and can revoke access at any time. This is perfect for trading, selling, or just showing off your collection to friends.'
    },
    {
      question: 'Can I track multiple collections?',
      answer: 'Yes! You can create unlimited collections and organize them however you like. Many collectors create separate collections for different games, sets, or even different collection goals (master sets, chase cards, investment pieces, etc.).'
    },
    {
      question: 'Do you have a mobile app?',
      answer: 'Our iOS and Android apps are currently in development and coming soon! When they launch, your existing account will work seamlessly across all devices with real-time sync. In the meantime, our web app is fully mobile-responsive.'
    },
    {
      question: 'How do I add cards to my collection?',
      answer: 'Adding cards is simple! Search for the card you want to add, select the specific variant/parallel if applicable, then log details like condition, acquisition method, price paid, and any custom notes. You can bulk-add multiple cards at once too.'
    },
    {
      question: 'What if I find an error in the card database?',
      answer: 'We rely on our community to help keep the database accurate. If you spot an error or missing card, you can submit a correction through our feedback form. Our team reviews submissions and updates the database regularly.'
    },
    {
      question: 'Is my collection data private and secure?',
      answer: 'Yes, your data is private by default. Only you can see your collections unless you explicitly share them. We use industry-standard encryption and security practices to protect your information. We never sell your data to third parties.'
    },
    {
      question: 'Can I export my collection data?',
      answer: 'Yes! You can export your collection data in multiple formats (CSV, Excel, PDF) at any time. This is useful for insurance purposes, trading, or if you want to use your data with other tools.'
    },
    {
      question: 'How often is the card database updated?',
      answer: 'We update the database continuously as new sets are released. Major releases are typically added within days of launch. Community-reported cards and corrections are reviewed and added on a rolling basis.'
    }
  ];

  return (
    <div className="pt-20 bg-[#0F0F1A] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#251433] via-[#1A1A2E] to-[#141F33] py-20 md:py-32 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#B766FF]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#12D3FF]/20 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-gradient-to-r from-[#B766FF]/20 to-[#12D3FF]/20 border border-[#B766FF]/30 rounded-full">
                <span className="text-[#12D3FF] font-bold text-sm uppercase tracking-wider">FAQ</span>
              </div>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Everything you need to know about HoloHoard. Can't find what you're looking for? 
              Reach out to our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-[#1A1A2E] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B766FF]/5 to-[#12D3FF]/5" />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <button className="relative bg-gradient-to-r from-[#FF1F8E] to-[#B766FF] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Contact Support</span>
          </button>
        </div>
      </section>
    </div>
  );
}