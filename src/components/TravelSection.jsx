import React, { useState, useMemo } from 'react';
import { MapPin, Calendar, Maximize2, Sparkles, Compass } from 'lucide-react';
import { travelData } from '../data/travelData';
import TravelLightboxModal from './TravelLightboxModal';

export default function TravelSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'Barcha Xotiralar (12)' },
    { id: 'World Tour', label: 'World Tour & Sahna' },
    { id: 'Healing', label: 'Healing & Lager' },
    { id: 'Concept', label: 'Concept & Shoot' },
    { id: 'SKZ-CODE', label: 'SKZ-CODE Epizodlari' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return travelData;
    return travelData.filter((item) => {
      const cat = (item.category || '').toLowerCase();
      const tags = (item.tags || []).map((t) => t.toLowerCase());
      const query = selectedCategory.toLowerCase();

      return cat.includes(query) || tags.some((t) => t.includes(query));
    });
  }, [selectedCategory]);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="travel" className="py-24 bg-skz-black relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-skz-red/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            05 / ON THE ROAD & MOMENTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            TRAVEL & TOUR <span className="text-gradient-red">MEMORIES</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Dunyoning turli shaharlarida, dengiz bo'yida, o'rmonlarda, qorli tog'larda va sahnada yaratilgan qadrdon xotiralar galereyasi. Kattalashtirib tomosha qilish uchun istalgan surat ustiga bosing.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer bg-skz-card rounded-3xl overflow-hidden border border-zinc-800/90 hover:border-skz-red/60 shadow-xl hover:shadow-red-sm transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-skz-black/90 via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-skz-black/80 backdrop-blur-md text-white border border-zinc-700/60">
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-zinc-300 group-hover:text-skz-red group-hover:bg-skz-red/20 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Location pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-zinc-200 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-skz-red shrink-0" />
                  <span className="truncate font-medium">{item.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black font-display text-white mb-2 group-hover:text-skz-red transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500">
                    {item.date}
                  </span>
                  <span className="text-skz-red font-bold flex items-center gap-1">
                    Xotirani ochish ✦
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <TravelLightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}

