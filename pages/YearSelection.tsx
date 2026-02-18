import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GlassCard from '../components/UI/GlassCard';
import { getYearData } from '../constants';
import { CourseType, SectionType } from '../types';

const YearSelection: React.FC = () => {
  const { courseId, categoryId } = useParams<{ courseId: string; categoryId: string }>();

  if (!courseId || !categoryId) {
    return <Navigate to="/" />;
  }

  const years = getYearData(courseId, categoryId);
  const categoryName = categoryId === SectionType.CONTENT ? 'Conteúdos' : 'Testes';

  return (
    <div className="animate-fade-in-up">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{categoryName}</h2>
        <p className="text-slate-500 dark:text-white/60">Selecione o ano letivo para visualizar o material.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {years.map((year) => (
          <GlassCard
            key={year.id}
            title={year.title}
            description={year.description}
            icon={year.icon}
            to={year.path}
            gradient={year.gradient}
            className="h-48"
          />
        ))}
      </div>
    </div>
  );
};

export default YearSelection;