import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, FileText, ChevronRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { REGISTRY } from '../../utils/ContentRegistry';
import { RegistryEntry } from '../../types';
import { useNavigate } from 'react-router-dom';

const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<RegistryEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setResults([]);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const allItems = REGISTRY;
    const filtered = allItems.filter(item => 
      item.meta.title.toLowerCase().includes(query.toLowerCase()) ||
      item.meta.description.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  const handleClose = () => setIsSearchOpen(false);

  const handleNavigate = (path: string) => {
    if (path) {
      navigate(path);
      handleClose();
    }
  };

  const HighlightedText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-yellow-200 dark:bg-yellow-500/30 text-yellow-800 dark:text-yellow-200 rounded px-0.5 font-medium">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col pt-4 items-center bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl transition-all duration-300">
      <div className="w-full max-w-3xl px-4 flex items-center gap-4 mb-8">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Busque por conteúdos, testes..."
            className="w-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-lg text-slate-800 dark:text-white outline-none focus:border-accent dark:focus:border-accent transition-colors shadow-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button 
          onClick={handleClose}
          className="p-3 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="w-full max-w-3xl px-4 overflow-y-auto pb-20">
        {query && results.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-gray-400">
            <p>Nenhum resultado encontrado para "{query}"</p>
          </div>
        )}

        <div className="space-y-3">
          {results.map((item, idx) => (
            <div 
              key={`${item.path}-${idx}`}
              onClick={() => handleNavigate(item.path || '/')}
              className="flex items-center p-4 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl hover:bg-slate-50 dark:hover:bg-white/10 cursor-pointer group transition-all"
            >
              <div 
                className="p-3 rounded-lg mr-4 text-white"
                style={{ backgroundColor: 'var(--accent-color)' }}
              >
                {item.meta.icon ? <item.meta.icon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-white group-hover:text-accent transition-colors">
                  <HighlightedText text={item.meta.title} highlight={query} />
                </h4>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  <HighlightedText text={item.meta.description} highlight={query} />
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 dark:text-gray-600 group-hover:text-accent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;