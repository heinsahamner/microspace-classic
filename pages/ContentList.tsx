import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FileText, Lock } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { getRegistryList } from '../utils/ContentRegistry';

const ContentList: React.FC = () => {
  const { type, course, year } = useParams<{ type: string; course: string; year: string }>();

  if (!type || !course || !year) {
    return <Navigate to="/" />;
  }

  const items = getRegistryList(type, course, year);

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{year.replace('-', ' ')}</h2>
        <p className="text-slate-500 dark:text-white/60">
          Materiais disponíveis em {course} / {type}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <GlassCard
            key={item.path}
            title={item.meta.title}
            description={item.meta.description}
            icon={item.meta.icon || FileText}
            to={item.path} // Rota direta do registro
            className="min-h-[160px]"
          />
        ))}
        
        {items.length === 0 && (
          <div className="col-span-full text-center p-12 bg-white/50 dark:bg-white/5 rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
            <p className="text-xl text-slate-500 dark:text-gray-400 font-medium">Nenhum conteúdo registrado aqui ainda.</p>
            <p className="text-sm text-slate-400 mt-2">Use a CLI para criar: <code className="bg-black/10 px-1 rounded">node scripts/create-page.js</code></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentList;
