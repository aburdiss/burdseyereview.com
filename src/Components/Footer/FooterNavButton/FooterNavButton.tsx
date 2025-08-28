import { NavLink } from 'react-router'

import './FooterNavButton.css'
import { cls } from '@/utils/className'

export default function FooterNavButton({
  title,
  href,
  className,
}: Readonly<{ title: string; href: string; className?: string }>) {
  return (
    <NavLink className={cls('footer-nav-button', className)} to={href}>
      {title}
    </NavLink>
  )
}
