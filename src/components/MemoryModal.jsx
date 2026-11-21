import React, { useState } from 'react';
import { X, Heart, Sparkles, Send } from 'lucide-react';

export default function MemoryModal({ isOpen, onClose, onSaveMemory }) {
  const [name, setName] = useState('');
  const [era, setEra] = useState('ATE / 2024');
  const [favoriteMember, setFavoriteMember] = useState('Barchasi (OT8)');
  const [memoryText, setMemoryText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!memoryText.trim()) return;

    const newMemory = {
      id: Date.now().toString(),
      name: name.trim() || 'STAY',
      era,
      favoriteMember,
      text: memoryText.trim(),
      date: new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    onSaveMemory(newMemory);
    setName('');
    setMemoryText('');
    onClose();
  };

  const eras = [
    'ATE / 2024',
    'ROCK-STAR / 2023',
    '5-STAR / 2023',
    'MAXIDENT / 2022',
    'ODDINARY / 2022',
    'NOEASY / 2021',
    'GO LIVE / 2020',
    'MIROH / 2019',
    'Debut / 2018',
    'THIS & THAT / 2026'
  ];

  const membersList = [
    'Barchasi (OT8)',
    'Bang Chan 🐺',
    'Lee Know 🐰',
    'Changbin 🐷🐰',
    'Hyunjin 🥟',
    'HAN 🐿️',
    'Felix 🐥',
    'Seungmin 🐶',
    'I.N 🦊'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Dialog box */}
      <div 
        className="relative z-10 w-full max-w-lg bg-skz-card border border-skz-red/50 rounded-3xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-skz-red/20 border border-skz-red/40 text-skz-red text-xs font-mono font-bold uppercase mb-2">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>STAY MEMORY ARCHIVE</span>
          </div>
          <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white">
            Xotirangni Yozib Qoldir ✦
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Stray Kids bilan bog'liq eng unutilmas his-tuyg'ularingni baham ko'r.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
              Ismingiz / STAY Taxallusi
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masalan: Rayhona STAY yoki Felix's Sunshine"
              maxLength={40}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-skz-red text-white text-xs placeholder-zinc-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                Sevimli Era
              </label>
              <select
                value={era}
                onChange={(e) => setEra(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-skz-red text-white text-xs focus:outline-none"
              >
                {eras.map((er) => (
                  <option key={er} value={er}>{er}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
                Bias / A'zo
              </label>
              <select
                value={favoriteMember}
                onChange={(e) => setFavoriteMember(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-skz-red text-white text-xs focus:outline-none"
              >
                {membersList.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1">
              Sening Xotirang / Xabaring (STAY Memory)
            </label>
            <textarea
              required
              rows={4}
              value={memoryText}
              onChange={(e) => setMemoryText(e.target.value)}
              placeholder="Stray Kids bilan bog'liq eng sevimli xotirang, qo'shig'i hayotingga qanday ta'sir qilgani..."
              maxLength={300}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-skz-red text-white text-xs placeholder-zinc-500 focus:outline-none transition-colors resize-none"
            />
            <div className="text-right text-[10px] font-mono text-zinc-500 mt-1">
              {memoryText.length} / 300
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-skz-red to-rose-700 hover:from-red-600 hover:to-skz-red transition-all shadow-red-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Xotirani Saqlash</span>
          </button>
        </form>

      </div>
    </div>
  );
}

