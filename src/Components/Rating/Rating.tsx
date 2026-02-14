import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';
import './Rating.css';

export default function Rating({ stars = 0 }: { stars: number }) {
  const numberOfCompleteStars = Math.floor(stars);
  const hasHalfStar = !Number.isInteger(stars);
  const numberOfEmptyStars = 10 - (hasHalfStar ? 1 : 0) - numberOfCompleteStars;

  return (
    <div className="rating-container">
      {Array.from({ length: numberOfCompleteStars }).map(() => (
        <IoStar size="20" />
      ))}
      {hasHalfStar && <IoStarHalf size="20" />}
      {Array.from({ length: numberOfEmptyStars }).map(() => (
        <IoStarOutline size="20" />
      ))}
      <span className="rating-text">{stars}/10</span>
    </div>
  );
}
