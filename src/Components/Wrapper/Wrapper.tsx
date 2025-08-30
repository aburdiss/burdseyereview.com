import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';
import SkipLink from '@/Components/SkipLink/SkipLink';
import Layout from '@/Components/Layout/Layout';

import './Wrapper.css';
import type { Route } from '@/types/route';

export default function Wrapper({
  routes,
  children,
}: Readonly<{
  routes: Route[];
  children?: React.ReactNode;
}>) {
  return (
    <div className="outer-wrapper os-n">
      <SkipLink />
      <Header routes={routes}></Header>
      <main id="main-content" tabIndex={-1}>
        <Layout>{children}</Layout>
      </main>
      <Footer routes={routes}></Footer>
    </div>
  );
}
