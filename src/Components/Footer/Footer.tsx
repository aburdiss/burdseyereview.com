import { ROUTES } from '@/constants/routes';
import './Footer.css';

import FooterNavButton from './FooterNavButton/FooterNavButton';
import Layout from '@/Components/Layout/Layout';
import type { Route } from '@/types/route';

export default function Footer({ routes }: Readonly<{ routes: Route[] }>) {
  return (
    <footer className="footer">
      <Layout>
        <nav>
          <FooterNavButton href="/" title="Home" />
          {routes.map(function (route: Route) {
            return (
              <FooterNavButton
                key={route.name}
                href={ROUTES.type.replace(':type', route.slug)}
                title={route.name}
              />
            );
          })}
        </nav>
        <div>
          Copyright © {new Date().getFullYear()} Alexander and Courtney Burdiss
        </div>
        <FooterNavButton
          className="privacy"
          title="Privacy Policy"
          href={ROUTES.privacy}
        />
      </Layout>
    </footer>
  );
}
