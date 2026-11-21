import React from 'react';
import { X, Calendar, MapPin, Heart, Sparkles, UserCheck, Flame } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-skz-card border border-skz-red/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-skz-red animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              MEMBER PROFILE · STRAY KIDS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Main Info */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            
            {/* Member Portrait */}
            <div className="sm:col-span-5 relative group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-skz-red/50 shadow-red-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-skz-black/80 via-transparent to-transparent" />
                
                {/* SKZOO Floating Badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-skz-black/80 backdrop-blur-md text-amber-300 border border-amber-400/40 shadow-lg">
                  {member.skzoo}
                </span>

                {/* Sub-Unit Badge */}
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase bg-skz-red text-white shadow-red-sm">
                  {member.unit}
                </span>
              </div>
            </div>

            {/* Profile Bio */}
            <div className="sm:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-skz-red tracking-wider uppercase">
                  {member.koreanName}
                </span>
              </div>

              <h3 className="text-3xl font-black font-display text-white mb-2">
                {member.name}
              </h3>

              <p className="text-xs font-mono text-zinc-300 mb-4 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 inline-block">
                {member.role}
              </p>

              {/* Facts grid */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px] uppercase">Tug'ilgan kuni</span>
                  <span className="text-zinc-200 font-semibold">{member.birthDate}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <span className="text-zinc-500 block text-[10px] uppercase">Burch (Zodiac)</span>
                  <span className="text-zinc-200 font-semibold">{member.zodiac}</span>
                </div>
              </div>

              {/* Motto */}
              {member.motto && (
                <div className="p-3 rounded-xl bg-skz-red/10 border border-skz-red/30 mb-4">
                  <p className="text-[10px] uppercase font-mono text-skz-red font-bold">Shiori (Motto)</p>
                  <p className="text-xs font-serif italic text-zinc-200">{member.motto}</p>
                </div>
              )}

              <p className="text-xs text-zinc-300 leading-relaxed">
                {member.description}
              </p>
            </div>

          </div>

          {/* Skills / Specialities */}
          {member.skills && (
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-skz-red" />
                Asosiy Ko'nikmalar & Xarakter
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-skz-red/40 transition-colors"
                  >
                    ✦ {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quote & Close Friends */}
          <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <p className="text-[10px] uppercase font-mono text-zinc-500 mb-1">STAYga Bag'ishlov</p>
              <p className="text-xs italic text-zinc-300">{member.quote}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
              <p className="text-[10px] uppercase font-mono text-zinc-500 mb-1">Yaqin Guruhdoshlar</p>
              <p className="text-xs text-zinc-300 font-semibold">{member.closeMembers}</p>
            </div>
          </div>

          {/* Footer close */}
          <div className="pt-4 flex justify-end border-t border-zinc-800">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-skz-red hover:bg-red-700 transition-colors shadow-red-sm"
            >
              Yopish
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

