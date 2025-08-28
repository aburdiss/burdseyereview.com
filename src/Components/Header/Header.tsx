import './Header.css'

import { NavLink } from 'react-router'
import NavButton from './NavButton/NavButton'
import Layout from '../Layout/Layout'

export default function Header() {
  return (
    <header className="header">
      <Layout>
        <div className="main-heading">
          <NavLink to="/">
            Burd's Eye Review
          </NavLink>
        </div>
        <nav>
          <NavButton title="Music" href="/music" />
          <NavButton title="Recipes" href="/recipes" />
          <NavButton title="A.D.A.P.T." href="/adapt" />
        </nav>
      </Layout>
    </header>
  )
}
