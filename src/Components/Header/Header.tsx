import './Header.css';
import type { Route } from '@/types/route';

import { NavLink } from 'react-router';
import NavButton from './NavButton/NavButton';
import Layout from '../Layout/Layout';

export default function Header({ routes }: Readonly<{ routes: Route[] }>) {
  return (
    <header className="header">
      <Layout>
        <div className="main-heading">
          <NavLink to="/">Burd's Eye Review</NavLink>
        </div>
        <nav>
          {routes.map(function (route: Route) {
            return (
              <NavButton
                key={route.name}
                title={route.name}
                href={route.slug}
              />
            );
          })}
        </nav>
      </Layout>
    </header>
  );
}
