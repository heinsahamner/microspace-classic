import React from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const AboutModal: React.FC = () => {
  const { isAboutOpen, setIsAboutOpen } = useTheme();

  if (!isAboutOpen) return null;

  const links = [
    { label: 'Repositório GitHub', url: '#' },
    { label: 'Documentação Oficial', url: '#' },
    { label: 'Comunidade Discord', url: '#' },
    { label: 'Política de Privacidade', url: '#' },
    { label: 'Termos de Uso', url: '#' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsAboutOpen(false)}
      ></div>
      
      <div className="relative w-full max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 animate-float">
        <button 
          onClick={() => setIsAboutOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-500 dark:text-gray-400"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Sobre o Projeto</h2>
          <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
            Plataforma de conteúdos educativos baseada no <span className="font-semibold text-accent">Microspace</span> original de 2025 (fracassado, coitado).
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url}
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-gray-200">{link.label}</span>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">
            Qualquer um pode publicar materiais e contribuir (se tiver um conhecimento ok de terminal).
          </p>
          <Link 
            to="/microspace-guide" 
            onClick={() => setIsAboutOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline decoration-2 underline-offset-4"
          >
            <BookOpen className="w-4 h-4" />
            Guia de Publicação
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;