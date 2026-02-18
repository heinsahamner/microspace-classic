import React, { Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getRegistryByPath } from '../utils/ContentRegistry';

const ContentViewer: React.FC = () => {
  const { courseId, categoryId, yearId, contentId } = useParams<{ 
    courseId: string; 
    categoryId: string; 
    yearId: string;
    contentId: string;
  }>();

  if (!courseId || !categoryId || !yearId || !contentId) {
    return <Navigate to="/" />;
  }

  const fullPath = `/${categoryId}/${courseId}/${yearId}/${contentId}`;
  
  const entry = getRegistryByPath(fullPath);

  if (!entry) {
    return (
      <div className="animate-fade-in-up max-w-4xl mx-auto text-center py-20">
         <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Conteúdo não encontrado</h2>
         <p className="text-slate-500 mt-2">O caminho <code>{fullPath}</code> não existe no registro.</p>
      </div>
    );
  }

  const Component = entry.component;

  return (
    <Suspense fallback={
       <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <Component />
    </Suspense>
  );
};

export default ContentViewer;