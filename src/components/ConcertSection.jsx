import React from 'react';
import { Heart, Sparkles, Radio, MessageSquare, Trash2, Calendar, User } from 'lucide-react';

export default function ConcertSection({ onOpenMemory, memories, onDeleteMemory }) {
  return (
    <section id="concert" className="py-24 bg-skz-dark relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-skz-red/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            08 / THE STAGE & STAY WALL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            ONE NIGHT TO <span className="text-gradient-red">REMEMBER</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            STAY bilan birga kechirilgan har bir konsert, har bir nafas va unutilmas lahzalar. Xotira kitobi shu yerda tugamaydi — siz ham o'z his-tuyg'ularingizni muhrlab qoldiring.
          </p>
        </div>

        {/* Concert Spotlight Box */}
        <div className="glass-panel-red rounded-3xl border border-skz-red/30 p-6 sm:p-10 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Live Video */}
            <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden border border-skz-red/40 shadow-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/0P0aQreFs8w?rel=0&modestbranding=1"
                title="Stray Kids Live Stage"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Stage Info & Action */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-3 h-3 rounded-full bg-skz-red animate-ping" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-skz-red">
                  STAY MEMORY & LIVE STAGE
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-3">
                You make <br />
                <span className="text-gradient-red">Stray Kids stay.</span>
              </h3>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                Qayerda bo'lishingizdan qat'i nazar, qaysi tilda gaplashishingizdan qat'i nazar — STAY bilan Stray Kids o'rtasidagi rishta hech qachon uzilmaydi. 2018-yildan to abadiyatgacha!
              </p>

              <button
                onClick={onOpenMemory}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-skz-red to-rose-700 hover:from-red-600 hover:to-skz-red shadow-red-md hover:shadow-red-lg transition-all transform hover:-translate-y-0.5 border border-red-500/30"
              >
                <Heart className="w-4 h-4 fill-current animate-pulse" />
                <span>Mening Xotiramni Qo'shish ✦</span>
              </button>
            </div>

          </div>
        </div>

        {/* STAY Memory Wall */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-skz-red" />
              <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white">
                STAY Xotiralar Devori (Memory Wall)
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {memories.length} ta xotira saqlangan
            </span>
          </div>

          {memories.length === 0 ? (
            <div className="text-center py-12 bg-skz-card rounded-2xl border border-zinc-800">
              <Heart className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
              <p className="text-xs text-zinc-400">Hozircha xotiralar yo'q. Birinchi bo'lib o'z xotirangizni qoldiring!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {memories.map((m) => (
                <div
                  key={m.id}
                  className="bg-skz-card rounded-2xl p-5 border border-zinc-800/80 hover:border-skz-red/40 transition-colors flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-skz-red to-zinc-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                          {m.name.slice(0, 2)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{m.name}</p>
                          <p className="text-[10px] font-mono text-zinc-500">{m.date}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => onDeleteMemory(m.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 transition-opacity"
                        title="O'chirish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {m.era && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-skz-red">
                          {m.era}
                        </span>
                      )}
                      {m.favoriteMember && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-amber-300">
                          {m.favoriteMember}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed italic font-serif">
                      “{m.text}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

