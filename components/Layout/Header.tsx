import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { setIsSettingsOpen, setIsSearchOpen, setIsAboutOpen } = useTheme();

  return (
    <header className="sticky top-0 z-40 px-4 py-4 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative flex items-center justify-between p-3 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/20 shadow-lg dark:shadow-xl transition-all duration-300">
          
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 transition-colors"
            aria-label="Configurações"
          >
            <Settings className="w-5 h-5" />
          </button>

          <button 
            onClick={() => setIsAboutOpen(true)}
            className="flex flex-col items-center justify-center gap-0 group hover:opacity-80 transition-opacity"
          >
            <h1 className="text-xl font-bold tracking-wide">
              <span style={{ color: 'var(--accent-color)' }}>Microspace</span>
              <span className="font-light text-slate-700 dark:text-white ml-1.5 transition-colors">Classic</span>
            </h1>
          </button>

          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-gray-300 transition-colors"
            aria-label="Pesquisar"
          >
            <Search className="w-5 h-5" />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;