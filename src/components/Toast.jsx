import React from 'react';
import { Heart, Sparkles, X } from 'lucide-react';

export default function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-skz-dark/95 border border-skz-red/60 text-white shadow-red-md backdrop-blur-md animate-bounce">
      <div className="p-1 rounded-full bg-skz-red/20 text-skz-red">
        <Heart className="w-4 h-4 fill-current" />
      </div>
      <span className="text-xs font-bold font-mono tracking-wide">
        {message}
      </span>
      <button
        onClick={onClose}
        className="p-1 text-zinc-400 hover:text-white rounded-lg transition-colors ml-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

