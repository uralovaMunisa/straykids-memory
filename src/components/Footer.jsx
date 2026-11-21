import React from 'react';
import { ArrowUp, Heart, Sparkles, Disc, Video } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-skz-black border-t border-zinc-900 py-16 relative overflow-hidden">
      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-skz-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Massive Logo Typography */}
        <div className="mb-6">
          <div className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase select-none">
            YOU MAKE <span className="text-skz-red">STRAY KIDS</span> STAY
          </div>
          <div className="text-xs font-mono text-zinc-500 tracking-widest uppercase mt-1">
            8 Voiced Symphony · Infinite Memories
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400 mb-8">
          <a href="#home" className="hover:text-skz-red transition-colors">HOME</a>
          <a href="#albums" className="hover:text-skz-red transition-colors">ALBUMS</a>
          <a href="#members" className="hover:text-skz-red transition-colors">MEMBERS</a>
          <a href="#travel" className="hover:text-skz-red transition-colors">TRAVEL</a>
          <a href="#mvs" className="hover:text-skz-red transition-colors">M/V</a>
          <a href="#concert" className="hover:text-skz-red transition-colors">CONCERT</a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mb-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-skz-red border border-zinc-800 hover:border-skz-red shadow-lg transition-all transform hover:-translate-y-1"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>YUQORIGA QAYTISH ↑</span>
        </button>

        {/* Copyright */}
        <p className="text-[11px] text-zinc-600 font-mono">
          Fan-made STAY Memory Interactive Project · 2018 — 2026. <br />
          All original music, photos & videos belong to JYP Entertainment & Stray Kids.
        </p>

      </div>
    </footer>
  );
}
