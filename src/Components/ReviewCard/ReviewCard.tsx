import { ROUTES } from '@/constants/routes';
import type { ReviewCardType } from '@/types/review';
import { NavLink, useParams } from 'react-router';

import './ReviewCard.css';

export default function ReviewCard({
  review,
  customTo,
}: Readonly<{ review: ReviewCardType; customTo?: string }>) {
  const { type } = useParams();
  return (
    <NavLink
      to={
        customTo ??
        ROUTES.review
          .replace(':type', type ?? 'not-found')
          .replace(':review', review.slug.current)
      }
      className="review-card"
    >
      <img src={review.imageUrl} alt={review.imageAlt} />
      <div className="heading">
        <div>{review.title}</div>
        <div className="creator">{review.creator}</div>
      </div>
    </NavLink>
  );
}
