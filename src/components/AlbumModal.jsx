import React from 'react';
import { X, Play, Music, Calendar, Disc, ExternalLink, Sparkles, Flame } from 'lucide-react';

export default function AlbumModal({ album, onClose }) {
  if (!album) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-skz-card border border-skz-red/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-skz-red animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              ALBUM ARCHIVE · {album.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Artwork Cover */}
            <div className="sm:col-span-5 relative group">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-skz-red/50 shadow-red-md">
                <img
                  src={album.artwork}
                  alt={album.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/80 text-[11px] font-mono font-bold text-skz-red border border-skz-red/40">
                  {album.type}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="sm:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold text-skz-red tracking-wider uppercase mb-1">
                ERA RELEASE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2">
                {album.name}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-skz-red" />
                  {album.releaseDate || album.year}
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
                  <Disc className="w-3.5 h-3.5 text-skz-red" />
                  {album.tracks?.length || album.trackCount} trek
                </span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">
                  {album.genre || "K-Pop / Hip-Hop"}
                </span>
              </div>

              {album.titleTrack && (
                <div className="p-3 rounded-xl bg-skz-red/10 border border-skz-red/30 mb-4 flex items-center gap-3">
                  <Flame className="w-5 h-5 text-skz-red fill-current shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-mono text-skz-red font-bold">Bosh Trek (Title Track)</p>
                    <p className="text-sm font-bold text-white">{album.titleTrack}</p>
                  </div>
                </div>
              )}

              <p className="text-xs text-zinc-300 leading-relaxed">
                {album.desc}
              </p>
            </div>
          </div>

          {/* Tracklist Section */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
                <Music className="w-4 h-4 text-skz-red" />
                Albom Trek-ro'yxati (Tracklist)
              </h4>
              <span className="text-xs font-mono text-zinc-500">
                {album.tracks?.length || 0} ta qo'shiq
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {album.tracks?.map((track, i) => {
                const isTitle = album.titleTrack && track.toLowerCase().includes(album.titleTrack.toLowerCase());
                return (
                  <div
                    key={track + i}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                      isTitle
                        ? 'bg-skz-red/15 border-skz-red/50 text-white font-bold'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden pr-2">
                      <span className="font-mono text-zinc-500 w-5 text-right shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate">{track}</span>
                    </div>
                    {isTitle && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono uppercase bg-skz-red text-white shrink-0">
                        TITLE
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-zinc-800">
            <a
              href={`https://www.youtube.com/results?search_query=Stray+Kids+${encodeURIComponent(album.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-red-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>YouTube'da Tinglash</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              Yopish
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

