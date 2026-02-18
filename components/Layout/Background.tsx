import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Background: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div 
        className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob opacity-40 dark:opacity-30"
        style={{ backgroundColor: 'var(--accent-color)' }}
      ></div>
      
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-400/30 dark:bg-emerald-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-20 mix-blend-soft-light"></div>
    </div>
  );
};

export default Background;