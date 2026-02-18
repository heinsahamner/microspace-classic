import React from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GlassCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  to?: string;
  gradient?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  className = "",
  onClick,
  disabled = false
}) => {
  const BaseClasses = `
    group relative overflow-hidden rounded-3xl p-6 
    bg-white/60 dark:bg-white/5 
    backdrop-blur-xl border border-white/50 dark:border-white/10 
    shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
    transition-all duration-300 ease-out
    ${disabled 
      ? 'opacity-50 cursor-not-allowed' 
      : 'hover:-translate-y-1 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 hover:border-accent/30 cursor-pointer'
    }
    ${className}
  `;

  const Content = (
    <>
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 dark:opacity-20 transition-transform group-hover:scale-110"
        style={{ background: 'linear-gradient(to bottom right, var(--accent-color), transparent)' }}
      ></div>
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex items-start justify-between">
          <div 
            className="p-3 rounded-2xl shadow-sm text-white transition-colors"
            style={{ backgroundColor: 'var(--accent-color)' }}
          >
            {Icon ? <Icon className="w-6 h-6" /> : <div className="w-6 h-6" />}
          </div>
          {!disabled && <ChevronRight className="w-5 h-5 text-slate-400 dark:text-white/30 group-hover:text-accent dark:group-hover:text-white transition-colors" />}
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-accent dark:group-hover:text-cyan-200 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-gray-300 font-medium dark:font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={BaseClasses}>
        {Content}
      </Link>
    );
  }

  return (
    <div onClick={disabled ? undefined : onClick} className={BaseClasses}>
      {Content}
    </div>
  );
};

export default GlassCard;