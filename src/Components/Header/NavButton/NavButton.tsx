import { NavLink } from 'react-router';

import './NavButton.css';

export default function NavButton({
  title,
  href,
}: Readonly<{ title: string; href: string }>) {
  return (
    <NavLink className="nav-button" to={href}>
      {title}
    </NavLink>
  );
}
