import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import GlassCard from '../components/UI/GlassCard';
import { getCategoryData } from '../constants';
import { CourseType } from '../types';

const CourseMenu: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  if (!courseId || (courseId !== CourseType.ADM && courseId !== CourseType.INFO)) {
    return <Navigate to="/" />;
  }

  const categories = getCategoryData(courseId);
  const courseName = courseId === CourseType.ADM ? 'Administração' : 'Informática';

  return (
    <div className="animate-fade-in-up">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{courseName}</h2>
        <p className="text-slate-500 dark:text-white/60">O que você deseja acessar hoje?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <GlassCard
            key={cat.id}
            title={cat.title}
            description={cat.description}
            icon={cat.icon}
            to={cat.path}
            gradient={cat.gradient}
            className="h-56"
          />
        ))}
      </div>
    </div>
  );
};

export default CourseMenu;