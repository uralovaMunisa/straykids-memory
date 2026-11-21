import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import AlbumsSection from './components/AlbumsSection';
import MembersSection from './components/MembersSection';
import TravelSection from './components/TravelSection';
import MvSection from './components/MvSection';
import QuotesSection from './components/QuotesSection';
import ConcertSection from './components/ConcertSection';
import Footer from './components/Footer';
import MemoryModal from './components/MemoryModal';
import Toast from './components/Toast';

const DEFAULT_MEMORIES = [
  {
    id: "m-1",
    name: "Toshkent STAY",
    era: "ATE / 2024",
    favoriteMember: "Felix 🐥",
    text: "Chk Chk Boom chiqqan kun hayotimdagi eng ajoyib kun bo'lgan! Felixning 'Poppin' va bas ovozidan har doim quvvat olaman.",
    date: "2024.08.15"
  },
  {
    id: "m-2",
    name: "Samarkand STλY",
    era: "5-STAR / 2023",
    favoriteMember: "Bang Chan 🐺",
    text: "Bang Chan har bir Channie's Room live-ida aytgan so'zlari menga qiyin paytlarimda dalda bo'lgan. You make Stray Kids stay!",
    date: "2023.11.20"
  },
  {
    id: "m-3",
    name: "Fergana SKZ Fan",
    era: "ODDINARY / 2022",
    favoriteMember: "Hyunjin 🥟",
    text: "MANIAC va Red Lights xoreografiyasi — haqiqiy san'at asari. 8 a'zoning sahnadagi sadoqati va mehnati cheksiz hurmatga loyiq.",
    date: "2022.09.10"
  }
];

export default function App() {
  const [isMemoryModalOpen, setIsMemoryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [memories, setMemories] = useState([]);

  // Load memories from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('skz_stay_memories');
      if (saved) {
        setMemories(JSON.parse(saved));
      } else {
        setMemories(DEFAULT_MEMORIES);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
      setMemories(DEFAULT_MEMORIES);
    }
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const handleSaveMemory = (newMemory) => {
    const updated = [newMemory, ...memories];
    setMemories(updated);
    try {
      localStorage.setItem('skz_stay_memories', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    triggerToast("Xotirangiz muvaffaqiyatli saqlandi! 💜");
  };

  const handleDeleteMemory = (id) => {
    const updated = memories.filter((m) => m.id !== id);
    setMemories(updated);
    try {
      localStorage.setItem('skz_stay_memories', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not update localStorage:', e);
    }
    triggerToast("Xotira o'chirildi.");
  };

  return (
    <div className="min-h-screen bg-skz-black text-skz-text selection:bg-skz-red selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenMemory={() => setIsMemoryModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero 
          onExploreAlbums={() => {
            const el = document.getElementById('albums');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreTravel={() => {
            const el = document.getElementById('travel');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <Achievements />

        <AlbumsSection />

        <MembersSection />

        <TravelSection />

        <MvSection />

        <QuotesSection />

        <ConcertSection
          onOpenMemory={() => setIsMemoryModalOpen(true)}
          memories={memories}
          onDeleteMemory={handleDeleteMemory}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Toast */}
      <MemoryModal
        isOpen={isMemoryModalOpen}
        onClose={() => setIsMemoryModalOpen(false)}
        onSaveMemory={handleSaveMemory}
      />

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}

