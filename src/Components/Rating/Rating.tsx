import { NavLink } from 'react-router';

import en from '@/constants/en.json';

import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import './Rating.css';
import { ROUTES } from '@/constants/routes';

export default function Rating({ stars = 0 }: { stars: number }) {
  const numberOfCompleteStars = Math.floor(stars);
  const hasHalfStar = !Number.isInteger(stars);
  const numberOfEmptyStars = 10 - (hasHalfStar ? 1 : 0) - numberOfCompleteStars;

  return (
    <NavLink
      to={ROUTES.about}
      className="rating-container"
      title={
        (hasHalfStar
          ? `(${numberOfCompleteStars}/10: ${en[('rating' + numberOfCompleteStars) as keyof typeof en]})\n(${numberOfCompleteStars + 1}/10: ${en[('rating' + (numberOfCompleteStars + 1)) as keyof typeof en]})`
          : en[('rating' + numberOfCompleteStars) as keyof typeof en]) +
        '\n\nClick to learn how we rate things'
      }
    >
      {Array.from({ length: numberOfCompleteStars }).map((_, i) => (
        <IoStar size="20" key={i} />
      ))}
      {hasHalfStar && <IoStarHalf size="20" />}
      {Array.from({ length: numberOfEmptyStars }).map((_, i) => (
        <IoStarOutline size="20" key={i} />
      ))}
      <span className="rating-text">{stars}/10</span>
    </NavLink>
  );
}
