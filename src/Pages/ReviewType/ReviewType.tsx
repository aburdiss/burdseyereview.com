import ReviewCard from '@/Components/ReviewCard/ReviewCard';
import type { ReviewCardType } from '@/types/review';
import type { Route } from '@/types/route';
import client from '@/utils/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ReviewType.css';
import Loader from '@/Components/Loader/Loader';

const LOADING_HEADER = 'Loading';

export default function ReviewType({ routes }: Readonly<{ routes: Route[] }>) {
  const [pageData, setPageData] = useState<ReviewCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageHeader, setPageHeader] = useState(LOADING_HEADER);
  const { type } = useParams();

  useEffect(
    function getData() {
      async function fetchAlbums() {
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "review" && type->slug.current == "${type}"]{
            _id,
            title,
            slug,
            "imageUrl": image.asset->url,
            "imageAlt": image.alt,
          }`
        );
        setPageData(data);
        setLoading(false);
      }
      fetchAlbums();
    },
    [type]
  );

  useEffect(
    function populatePageData() {
      if (routes.length > 0) {
        const currentHeader = routes.find(function (route) {
          return route.slug === type;
        })?.name;

        if (currentHeader) setPageHeader(currentHeader);
      }
    },
    [pageData, routes, type, pageHeader]
  );

  return (
    <div>
      <h1>{loading ? LOADING_HEADER : pageHeader}</h1>
      <div className="review-card-container">
        {(() => {
          if (loading) {
            return <Loader />;
          }
          if (pageData.length > 0) {
            return pageData.map(function (review: ReviewCardType) {
              return <ReviewCard key={review._id} review={review} />;
            });
          }
          return (
            <div>No {pageHeader} Content Found. Please Try again later!</div>
          );
        })()}
      </div>
    </div>
  );
}
