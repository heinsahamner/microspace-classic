import React from 'react';
import { X, Moon, Sun, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const COLORS = [
  { name: 'Roxo (Padrão)', value: '#7900c5' },
  { name: 'Azul', value: '#2563eb' },
  { name: 'Esmeralda', value: '#059669' },
  { name: 'Rosa', value: '#db2777' },
  { name: 'Laranja', value: '#ea580c' },
  { name: 'Preto', value: '#1a1a1a' },
];

const SettingsModal: React.FC = () => {
  const { isSettingsOpen, setIsSettingsOpen, theme, toggleTheme, accentColor, setAccentColor } = useTheme();

  if (!isSettingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsSettingsOpen(false)}></div>
      
      <div className="relative w-full max-w-md bg-white/80 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-6 animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Configurações</h2>
          <button 
            onClick={() => setIsSettingsOpen(false)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Aparência</h3>
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-between w-full p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:border-accent/50 transition-all"
          >
            <span className="flex items-center gap-3 text-slate-700 dark:text-white font-medium">
              {theme === 'light' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-blue-400" />}
              {theme === 'light' ? 'Modo Claro' : 'Modo Escuro'}
            </span>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </button>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Cor de Destaque</h3>
          <div className="grid grid-cols-3 gap-3">
            {COLORS.map((color) => (
              <button
                key={color.value}
                onClick={() => setAccentColor(color.value)}
                className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${accentColor === color.value ? 'bg-white dark:bg-white/10 border-accent shadow-md' : 'bg-transparent border-transparent hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                <div 
                  className="w-8 h-8 rounded-full shadow-sm mb-2 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: color.value }}
                >
                  {accentColor === color.value && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-gray-300">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsModal;