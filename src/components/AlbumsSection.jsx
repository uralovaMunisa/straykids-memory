import React, { useState, useMemo } from 'react';
import { Search, Disc, Flame, Calendar, Music, ExternalLink, Sparkles } from 'lucide-react';
import { albumsData } from '../data/albumsData';
import AlbumModal from './AlbumModal';

export default function AlbumsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAlbum, setActiveAlbum] = useState(null);

  const categories = [
    { id: 'all', label: 'Barchasi (All 25)' },
    { id: 'studio', label: 'Studio Albomlar' },
    { id: 'mini', label: 'Mini Albomlar (EP)' },
    { id: 'japanese', label: 'Yapon Relizlari' },
    { id: 'special', label: 'Special & Tapes' },
  ];

  const filteredAlbums = useMemo(() => {
    return albumsData.filter((album) => {
      // Category filter
      const typeLower = (album.type || '').toLowerCase();
      let matchCat = true;
      if (selectedCategory === 'studio') {
        matchCat = typeLower.includes('studio');
      } else if (selectedCategory === 'mini') {
        matchCat = typeLower.includes('mini');
      } else if (selectedCategory === 'japanese') {
        matchCat = typeLower.includes('japanese');
      } else if (selectedCategory === 'special') {
        matchCat = typeLower.includes('special') || typeLower.includes('tape') || typeLower.includes('pre-debut');
      }

      // Search filter
      const matchSearch =
        album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (album.titleTrack && album.titleTrack.toLowerCase().includes(searchQuery.toLowerCase())) ||
        album.year.includes(searchQuery);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="albums" className="py-24 bg-skz-black relative">
      {/* Red ambient accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-skz-red/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-red-950/20 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            03 / COMPLETE DISCOGRAPHY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            DEBUTDAN <span className="text-gradient-red">2026-GACHA</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Stray Kidsning debyut Mixtapedan boshlab, jahon rekordlarini yangilagan barcha 25 ta rasmiy albom va relizlari. Har bir albom o'zining rasmiy muqovasi va to'liq ma'lumotlari bilan.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-skz-red text-white shadow-red-sm border border-red-400/50'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Albom yoki trek qidirish..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-zinc-900/90 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-skz-red transition-colors"
            />
          </div>
        </div>

        {/* Album Cards Grid */}
        {filteredAlbums.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-3xl border border-zinc-800">
            <Disc className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-zinc-400 font-semibold">Hech qanday albom topilmadi.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-skz-red hover:underline font-mono"
            >
              Filtrlarni tozalash
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAlbums.map((album, index) => (
              <article
                key={album.id}
                onClick={() => setActiveAlbum(album)}
                className="group cursor-pointer bg-skz-card rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-skz-red/50 shadow-xl hover:shadow-red-sm transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Artwork with Vinyl Hover effect */}
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <img
                    src={album.artwork}
                    alt={album.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80';
                    }}
                  />
                  
                  {/* Subtle vinyl groove overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-skz-black/90 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-skz-black/80 backdrop-blur-md text-white border border-zinc-700/60">
                      {album.year}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-skz-red/90 text-white shadow-red-sm">
                      ERA {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Quick Title Track Pill */}
                  {album.titleTrack && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-skz-red/30 text-white text-xs">
                        <Flame className="w-3.5 h-3.5 text-skz-red fill-current shrink-0" />
                        <span className="truncate font-semibold">{album.titleTrack}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Album Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-skz-red mb-1 font-semibold">
                      {album.type}
                    </div>
                    <h3 className="text-lg font-black font-display text-white mb-2 group-hover:text-skz-red transition-colors line-clamp-1">
                      {album.name}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                      {album.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-500">
                      {album.tracks?.length || album.trackCount || 8} trek
                    </span>
                    <span className="text-xs font-bold text-skz-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Treklar & Tafsilotlar →
                    </span>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

      </div>

      {/* Modal Dialog */}
      {activeAlbum && (
        <AlbumModal
          album={activeAlbum}
          onClose={() => setActiveAlbum(null)}
        />
      )}
    </section>
  );
}

