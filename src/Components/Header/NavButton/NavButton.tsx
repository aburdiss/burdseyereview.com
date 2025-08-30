import { NavLink } from 'react-router';

import './NavButton.css';
import { ROUTES } from '@/constants/routes';

export default function NavButton({
  title,
  href,
}: Readonly<{ title: string; href: string }>) {
  return (
    <NavLink className="nav-button" to={ROUTES.type.replace(':type', href)}>
      {title}
    </NavLink>
  );
}
