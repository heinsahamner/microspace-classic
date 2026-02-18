import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex px-4 py-2 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-cyan-200 capitalize md:ml-2">
                    {value.replace('-', ' ')}
                  </span>
                ) : (
                  <Link to={to} className="ml-1 text-sm font-medium text-gray-400 hover:text-white capitalize md:ml-2">
                    {value.replace('-', ' ')}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;