import React from 'react';
import { Trophy, TrendingUp, Radio, Globe, ShieldCheck, Flame, Disc } from 'lucide-react';
import { achievementsData } from '../data/quotesData';

export default function Achievements() {
  const icons = [
    <Trophy className="w-6 h-6 text-skz-red" />,
    <TrendingUp className="w-6 h-6 text-amber-500" />,
    <Disc className="w-6 h-6 text-rose-500" />,
    <Globe className="w-6 h-6 text-red-500" />
  ];

  return (
    <section id="achievements" className="py-24 bg-skz-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-skz-red/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-950/20 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            02 / NOW & FUTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            2026 — <span className="text-gradient-red">HISTORY IN MOTION</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Stray Kidsning debutidan to 2026-yilgacha erishgan global yutuqlari, rekordlari va o'z qo'llari bilan yaratgan musiqiy inqilobi.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievementsData.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-skz-card hover:bg-zinc-900/90 rounded-2xl p-6 border border-zinc-800 hover:border-skz-red/50 shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner accent glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-skz-red/10 rounded-full filter blur-xl group-hover:bg-skz-red/25 transition-all" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-zinc-500 tracking-wider">
                    0{index + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 group-hover:border-skz-red/40 group-hover:shadow-red-sm transition-all">
                    {icons[index]}
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-2 group-hover:text-skz-red transition-colors">
                  {item.number}
                </div>

                <h3 className="text-base font-bold text-zinc-100 uppercase tracking-wide mb-1 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-skz-red mb-3">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-panel-red border border-skz-red/30 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-skz-red/40 shadow-xl group">
              <img
                src="./images/travel/travel_06_blue_portrait.png"
                alt="Stray Kids Concept"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-skz-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-black/70 border border-skz-red/50 text-white font-bold">
                  8 VOICES · 1 TEAM
                </span>
                <span className="text-zinc-300">SINCE 2018</span>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-2">
                <Flame className="w-4 h-4 fill-current" />
                <span>THE SELF-PRODUCING REVOLUTION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-white mb-4 leading-snug">
                “O'z yo'limizni o'zimiz topamiz va o'z musiqamiz bilan tariximizni yozamiz.”
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                Stray Kids nomi shunchaki sarlavha emas, balki an'anaviy andozalarni yorib o'tish falsafasidir. 3RACHA (Bang Chan, Changbin, HAN) yaratgan har bir qo'shiq — guruhning samimiy kechinmalari, jasorati va STAY bilan uzviy bog'langan dostonidir.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🔥 3RACHA Production
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300">
                  ⚡ DANCE RACHA Choreography
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300">
                  🎤 VOCAL RACHA Harmonization
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

