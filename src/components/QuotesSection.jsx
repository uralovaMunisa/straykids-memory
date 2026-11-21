import React from 'react';
import { Quote, Sparkles, Heart } from 'lucide-react';
import { quotesData } from '../data/quotesData';

export default function QuotesSection() {
  return (
    <section id="quotes" className="py-24 bg-skz-black relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-skz-red/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            07 / WORDS TO KEEP
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            WORDS THAT <span className="text-gradient-red">STAY</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A'zolarning STAY yuragida abadiy muhrlangan eng samimiy, kuchli va dalda beruvchi so'zlari.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotesData.map((q) => (
            <article
              key={q.member}
              className="group bg-skz-card rounded-3xl p-6 border border-zinc-800/90 hover:border-skz-red/50 shadow-xl hover:shadow-red-sm transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Member Avatar & Details */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-zinc-800">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-skz-red/50 shrink-0">
                    <img
                      src={q.avatar}
                      alt={q.member}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-skz-red transition-colors font-display">
                      {q.member}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {q.korean} · {q.tag}
                    </span>
                  </div>
                </div>

                {/* Quote Icon & Text */}
                <Quote className="w-6 h-6 text-skz-red/40 mb-2 rotate-180" />
                <blockquote className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic font-serif mb-4">
                  {q.quote}
                </blockquote>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
                {q.context}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

