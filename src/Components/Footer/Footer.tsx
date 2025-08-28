import { ROUTES } from '@/routes'
import './Footer.css'

import FooterNavButton from './FooterNavButton/FooterNavButton'
import Layout from '@/Components/Layout/Layout'

export default function Footer() {
  return (
    <footer className="footer">
      <Layout>
        <nav>
          <FooterNavButton href={ROUTES.home} title="Home" />
          <FooterNavButton href={ROUTES.music} title="Music" />
          <FooterNavButton href={ROUTES.recipes} title="Recipes" />
          <FooterNavButton href={ROUTES.adapt} title="A.D.A.P.T." />
        </nav>
        <div>
          Copyright © {new Date().getFullYear()} Alexander and Courtney Burdiss
        </div>
        <FooterNavButton className="privacy" title="Privacy Policy" href={ROUTES.privacy} />
      </Layout>
    </footer>
  )
}
