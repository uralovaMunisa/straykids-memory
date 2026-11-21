import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag, Sparkles } from 'lucide-react';

export default function TravelLightboxModal({ items, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || !items || !items[currentIndex]) return null;

  const current = items[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn">
      {/* Background click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close button top right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-900/80 hover:bg-skz-red text-zinc-300 hover:text-white transition-all shadow-lg border border-zinc-700/60"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-skz-red text-zinc-300 hover:text-white transition-all shadow-lg border border-zinc-700/60 hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-skz-red text-zinc-300 hover:text-white transition-all shadow-lg border border-zinc-700/60 hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Card */}
      <div 
        className="relative z-10 max-w-5xl w-full bg-skz-card border border-skz-red/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Large Image View */}
        <div className="lg:w-7/12 bg-black flex items-center justify-center p-2 relative group overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            className="max-h-[60vh] lg:max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
          />
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-skz-red/40 text-[11px] font-mono text-white">
            {currentIndex + 1} / {items.length}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-skz-dark/95 border-t lg:border-t-0 lg:border-l border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-skz-red/20 text-skz-red border border-skz-red/30">
                {current.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {current.date}
              </span>
            </div>

            <h3 className="text-2xl font-black font-display text-white mb-3">
              {current.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6 bg-zinc-900/80 p-2.5 rounded-xl border border-zinc-800">
              <MapPin className="w-4 h-4 text-skz-red shrink-0" />
              <span>{current.location}</span>
            </div>

            <div className="space-y-4 text-xs text-zinc-300 leading-relaxed">
              <p className="bg-zinc-900/40 p-4 rounded-2xl border border-zinc-800/80">
                {current.caption}
              </p>

              {current.tags && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls in Sidebar */}
          <div className="pt-6 border-t border-zinc-800 mt-6 flex items-center justify-between">
            <button
              onClick={onPrev}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Oldingi</span>
            </button>

            <span className="text-xs font-mono text-zinc-500">
              {currentIndex + 1} of {items.length}
            </span>

            <button
              onClick={onNext}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
            >
              <span>Keyingi</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

