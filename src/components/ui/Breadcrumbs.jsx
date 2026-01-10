import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="text-sm breadcrumbs px-4 py-2 bg-base-200/50 mb-4 inline-block rounded-full">
      <ul>
        <li>
          <Link to="/" className="flex items-center gap-1">
            <Home size={14} /> Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              {last ? (
                <span className="capitalize">{value.replace(/-/g, ' ')}</span>
              ) : (
                <Link to={to} className="capitalize">
                  {value.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}