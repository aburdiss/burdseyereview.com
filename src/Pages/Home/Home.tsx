import type { ReviewCardType } from '@/types/review';
import { useEffect, useState } from 'react';
import client from '@/utils/client';
import Loader from '@/Components/Loader/Loader';
import ReviewCard from '@/Components/ReviewCard/ReviewCard';
import { ROUTES } from '@/constants/routes';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<{
    featuredReviews: ReviewCardType[];
  } | null>(null);

  useEffect(function getData() {
    async function fetchData() {
      setLoading(true);
      const data = await client.fetch(`*[_type == "home"]{
        featuredReviews[]->{
          _id,
          "reviewType": type->name,
          "reviewTypeSlug": type->slug.current,
          title,
          creator,
          rating,
          slug,
          "imageUrl": image.asset->url,
          "imageAlt": image.alt,
        }
      }`);
      setPageData(data[0]);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <hgroup>
        <h1>Burd's Eye Review</h1>
        <h2>Come See the world from a Burd's eye view.</h2>
        <p>
          This is a site where we will post musings and reviews of things in our
          lives. Subscribe to our email newsletter to hear what we've been up to
          and get music recommendations, recipes, and learn more about cool
          things in the Dayton Area!
        </p>
      </hgroup>
      <section>
        <h2>{loading ? 'Loading' : 'Featured Reviews'}</h2>
        <div className="review-card-container">
          {(() => {
            if (loading) {
              return <Loader />;
            }
            if (
              pageData?.featuredReviews?.length &&
              pageData?.featuredReviews?.length > 0
            ) {
              return pageData?.featuredReviews?.map(function (
                review: ReviewCardType
              ) {
                return (
                  <ReviewCard
                    key={review._id}
                    review={review}
                    showType
                    customTo={ROUTES.review
                      .replace(':type', review.reviewTypeSlug ?? 'not-found')
                      .replace(':review', review.slug.current)}
                  />
                );
              });
            }
            return <div>No Content Found. Please Try again later!</div>;
          })()}
        </div>
      </section>
    </div>
  );
}
