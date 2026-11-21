import React, { useState } from 'react';
import { Play, Eye, Sparkles, Flame, Video } from 'lucide-react';
import { mvsData } from '../data/mvsData';

export default function MvSection() {
  const [activeMvId, setActiveMvId] = useState(mvsData[0]?.id);

  return (
    <section id="mvs" className="py-24 bg-skz-dark relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-950/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-skz-red/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            06 / OFFICIAL MUSIC VIDEOS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            M/V <span className="text-gradient-red">ARCHIVE</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Stray Kidsning eng afsonaviy musiqiy videolari. Tashqi saytga o'tmasdan, loyihaning o'zida to'g'ridan-to'g'ri tomosha qiling.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mvsData.map((mv) => (
            <article
              key={mv.id}
              className="bg-skz-card rounded-3xl overflow-hidden border border-zinc-800/90 hover:border-skz-red/50 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Responsive Iframe Embed */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${mv.youtubeId}?rel=0&modestbranding=1`}
                  title={`Stray Kids ${mv.title} M/V`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Video Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-skz-red/20 text-skz-red border border-skz-red/30">
                      {mv.album}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-skz-red" />
                      {mv.views}
                    </span>
                  </div>

                  <h3 className="text-xl font-black font-display text-white mb-2 group-hover:text-skz-red transition-colors">
                    {mv.title}
                  </h3>

                  <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                    {mv.description}
                  </p>
                </div>

                {mv.highlight && (
                  <div className="pt-3 border-t border-zinc-800 text-[11px] font-mono text-amber-400/90 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{mv.highlight}</span>
                  </div>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
