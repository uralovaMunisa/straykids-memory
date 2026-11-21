import React, { useState, useMemo } from 'react';
import { Flame, Sparkles, Heart, Users } from 'lucide-react';
import { membersData } from '../data/membersData';
import MemberModal from './MemberModal';

export default function MembersSection() {
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [activeMember, setActiveMember] = useState(null);

  const units = [
    { id: 'all', label: 'Barcha A\'zolar (8)' },
    { id: '3RACHA', label: '3RACHA (Producers)' },
    { id: 'DANCE RACHA', label: 'DANCE RACHA (Performers)' },
    { id: 'VOCAL RACHA', label: 'VOCAL RACHA (Vocalists)' },
  ];

  const filteredMembers = useMemo(() => {
    if (selectedUnit === 'all') return membersData;
    return membersData.filter((m) => m.unit.includes(selectedUnit));
  }, [selectedUnit]);

  return (
    <section id="members" className="py-24 bg-skz-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-skz-red/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-red-950/25 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-skz-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
            04 / EIGHT VOICES, ONE SOUL
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            STRAY KIDS <span className="text-gradient-red">MEMBERS</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-skz-red to-transparent mx-auto mb-4" />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Sakkiz xil xarakter, sakkizta beqiyos iste'dod va bitta ajralmas oila. Har bir a'zo o'zining rasmiy portreti, SKZOO belgisi va to'liq profili bilan.
          </p>
        </div>

        {/* Unit Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setSelectedUnit(unit.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedUnit === unit.id
                  ? 'bg-skz-red text-white shadow-red-sm border border-red-400/50'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {unit.label}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <article
              key={member.id}
              onClick={() => setActiveMember(member)}
              className="group cursor-pointer bg-skz-card rounded-3xl overflow-hidden border border-zinc-800/90 hover:border-skz-red/60 shadow-xl hover:shadow-red-sm transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80';
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-skz-black via-transparent to-black/30" />

                {/* Top SKZOO & Unit Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
                    {member.skzoo}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-skz-red text-white shadow-red-sm">
                    {member.unit.split(' ')[0]}
                  </span>
                </div>

                {/* Name over gradient */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono font-bold text-skz-red tracking-wider uppercase block">
                    {member.koreanName}
                  </span>
                  <h3 className="text-2xl font-black font-display text-white group-hover:text-skz-red transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono text-zinc-300 mb-3 line-clamp-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {member.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    {member.birthDate}
                  </span>
                  <span className="text-xs font-bold text-skz-red flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Profilni Ko'rish →
                  </span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Member Modal Dialog */}
      {activeMember && (
        <MemberModal
          member={activeMember}
          onClose={() => setActiveMember(null)}
        />
      )}
    </section>
  );
}

