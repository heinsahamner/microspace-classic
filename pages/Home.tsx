import React from 'react';
import GlassCard from '../components/UI/GlassCard';
import { getCourseData } from '../constants';

const Home: React.FC = () => {
  const courses = getCourseData();

  return (
    <div className="animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Selecione seu Curso</h2>
        <p className="text-slate-500 dark:text-white/60">Acesse os conteúdos de acordo.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <GlassCard
            key={course.id}
            title={course.title}
            description={course.description}
            icon={course.icon}
            to={course.path}
            gradient={course.gradient}
            className="h-64"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;