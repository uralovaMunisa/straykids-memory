import React from 'react';
import { Sparkles, ArrowDown, Play, Flame, Disc, Radio } from 'lucide-react';

export default function Hero({ onExploreAlbums, onExploreTravel }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Graphic & Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform filter brightness-40 contrast-125 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('./images/travel/travel_04_dark_concept.png')`,
        }}
      />

      {/* Atmospheric Overlays with Red & Black Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-skz-black via-skz-black/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-skz-black/90 via-transparent to-skz-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Scanline and glowing grid accents */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#e50914_1px,transparent_1px),linear-gradient(to_bottom,#e50914_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Era Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-skz-red/50 shadow-red-sm mb-6 backdrop-blur-md animate-pulse-slow">
          <Flame className="w-4 h-4 text-skz-red fill-current" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-200">
            STRAY KIDS • STAY • MEMORY ARCHIVE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-skz-red animate-ping" />
        </div>

        {/* Big Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-4 leading-none select-none uppercase">
          ALL AROUND <br />
          <span className="text-gradient-red drop-shadow-[0_0_35px_rgba(229,9,20,0.5)]">
            THE WORLD
          </span>
        </h1>

        {/* Divider with Red Diamond */}
        <div className="flex items-center gap-3 my-4 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-skz-red to-transparent" />
          <div className="w-2.5 h-2.5 rotate-45 bg-skz-red shadow-red-sm" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-skz-red to-transparent" />
        </div>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-widest text-zinc-100 uppercase mb-4 font-heading">
          YOU MAKE STRAY KIDS STAY
        </h2>

        <p className="max-w-2xl text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-8">
          <span className="font-mono font-bold text-skz-red tracking-wider">2018 → 2026</span> · Sakkiz ovoz, bitta musiqiy taqdir va butun dunyo bo'ylab millionlab qalbni birlashtirgan afsonaviy xotiralar to'plami.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#albums"
            onClick={onExploreAlbums}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-skz-red via-red-600 to-rose-700 hover:from-red-600 hover:to-skz-red shadow-red-md hover:shadow-red-lg transform hover:-translate-y-1 transition-all duration-200 border border-red-500/30"
          >
            <Disc className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Diskografiyani Ochish</span>
          </a>

          <a
            href="#travel"
            onClick={onExploreTravel}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 hover:text-white border border-zinc-700/60 hover:border-skz-red/50 shadow-lg transform hover:-translate-y-1 transition-all duration-200 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-skz-red" />
            <span>Travel & Xotiralar</span>
          </a>
        </div>

        {/* Live Audio Equalizer & Stats Pill */}
        <div className="glass-panel px-6 py-3 rounded-2xl flex items-center gap-6 border border-zinc-800/80 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-1 h-6">
              <span className="w-1 bg-skz-red rounded-full equalizer-bar" />
              <span className="w-1 bg-rose-500 rounded-full equalizer-bar" />
              <span className="w-1 bg-red-400 rounded-full equalizer-bar" />
              <span className="w-1 bg-skz-red rounded-full equalizer-bar" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider">Hozirgi Era</p>
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                THIS & THAT <span className="text-[10px] text-skz-red font-mono px-1.5 py-0.2 bg-skz-red/10 rounded border border-skz-red/30">2026</span>
              </p>
            </div>
          </div>

          <div className="h-7 w-[1px] bg-zinc-800" />

          <div className="flex items-center gap-4 text-left">
            <div>
              <p className="text-xs font-black font-display text-white">8</p>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">A'zo</p>
            </div>
            <div>
              <p className="text-xs font-black font-display text-skz-red">25+</p>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">Albom</p>
            </div>
            <div>
              <p className="text-xs font-black font-display text-white">9×</p>
              <p className="text-[10px] text-zinc-400 uppercase font-mono">#1 Billboard</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <a 
        href="#achievements" 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase group-hover:text-skz-red transition-colors">
          Pastga suring
        </span>
        <ArrowDown className="w-4 h-4 text-skz-red animate-bounce" />
      </a>
    </section>
  );
}

