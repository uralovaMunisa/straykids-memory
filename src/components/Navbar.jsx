import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Disc, Heart, Compass } from 'lucide-react';

export default function Navbar({ onOpenMemory }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: '2026 REKORD', href: '#achievements' },
    { label: 'ALBOMLAR', href: '#albums' },
    { label: 'A\'ZOLAR', href: '#members' },
    { label: 'TRAVEL', href: '#travel' },
    { label: 'M/V', href: '#mvs' },
    { label: 'SO\'ZLAR', href: '#quotes' },
    { label: 'SAHNA', href: '#concert' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-skz-black/90 backdrop-blur-md border-b border-skz-red/30 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-skz-red to-skz-dark flex items-center justify-center border border-skz-red/50 shadow-red-sm group-hover:shadow-red-md transition-all">
            <span className="text-white font-display font-black text-sm tracking-tighter">SKZ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-lg tracking-wider text-white group-hover:text-skz-red transition-colors flex items-center gap-1.5">
              SKZ<span className="text-skz-red animate-pulse">✦</span>MEMORY
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest font-mono -mt-1 uppercase">
              Stay Archive
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-md transition-all relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-skz-red scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenMemory}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-skz-red to-red-800 hover:from-red-600 hover:to-skz-red rounded-full shadow-red-sm hover:shadow-red-md transition-all transform hover:-translate-y-0.5"
          >
            <Heart className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
            <span>Xotira Qo'shish</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-skz-red" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-skz-dark/98 backdrop-blur-xl border-b border-skz-red/30 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold tracking-wider text-zinc-200 hover:text-white hover:bg-skz-red/20 rounded-lg transition-all border border-transparent hover:border-skz-red/30"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMemory();
              }}
              className="mt-3 flex items-center justify-center gap-2 w-full py-3 text-xs font-bold tracking-wider uppercase text-white bg-skz-red hover:bg-red-700 rounded-lg shadow-red-sm"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Xotira Qo'shish</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

