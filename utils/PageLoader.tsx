import React, { Suspense } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { getRegistryByPath } from './ContentRegistry';

const PageLoader: React.FC = () => {
  const location = useLocation();
  const entry = getRegistryByPath(location.pathname);

  if (!entry) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Página não encontrada (404)</h2>
        <p className="text-slate-500 mt-2">Verifique o arquivo <code>utils/ContentRegistry.tsx</code> se a rota está correta.</p>
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

export default PageLoader;
