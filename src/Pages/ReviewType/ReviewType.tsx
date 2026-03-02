import ReviewCard from '@/Components/ReviewCard/ReviewCard';
import type { ReviewCardType } from '@/types/review';
import type { Route } from '@/types/route';
import client from '@/utils/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ReviewType.css';
import Loader from '@/Components/Loader/Loader';
import ReviewIcon from '@/Components/ReviewIcon/ReviewIcon';

const LOADING_HEADER = 'Loading';

enum SORT_OPTIONS {
  Date = 'date',
  DateReverse = 'date-reverse',
  Rating = 'rating',
  RatingReverse = 'rating-reverse',
  Title = 'title',
  TitleReverse = 'title-reverse',
}

const SORT_NAMES = {
  [SORT_OPTIONS.Date]: 'Review Date (Latest First)',
  [SORT_OPTIONS.DateReverse]: 'Review Date (Oldest First)',
  [SORT_OPTIONS.Rating]: 'Rating (High to Low)',
  [SORT_OPTIONS.RatingReverse]: 'Rating (Low to High)',
  [SORT_OPTIONS.Title]: 'Title (A to Z)',
  [SORT_OPTIONS.TitleReverse]: 'Title (Z to A)',
};

const SORT_VALUES = {
  [SORT_OPTIONS.Date]: 'date desc',
  [SORT_OPTIONS.Rating]: 'rating desc',
  [SORT_OPTIONS.Title]: 'title asc',
  [SORT_OPTIONS.DateReverse]: 'date asc',
  [SORT_OPTIONS.RatingReverse]: 'rating asc',
  [SORT_OPTIONS.TitleReverse]: 'title desc',
};

async function fetchAlbums(
  setLoading: Function,
  setPageData: Function,
  type: string | undefined,
  sort: SORT_OPTIONS
) {
  setLoading(true);
  setPageData([]);
  const data = await client.fetch(
    `*[_type == "review" && type->slug.current == "${type}"]{
            _id,
            title,
            date,
            creator,
            slug,
            rating,
            "imageUrl": image.asset->url,
            "imageAlt": image.alt,
          } | order(${SORT_VALUES[sort]})`
  );
  setPageData(data);
  setLoading(false);
}

export default function ReviewType({ routes }: Readonly<{ routes: Route[] }>) {
  const [pageData, setPageData] = useState<ReviewCardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageHeader, setPageHeader] = useState(LOADING_HEADER);
  const [sort, setSort] = useState(SORT_OPTIONS.Date);
  const { type } = useParams();

  useEffect(
    function getData() {
      fetchAlbums(setLoading, setPageData, type, sort);
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
      <h1>
        {loading ? (
          LOADING_HEADER
        ) : (
          <span>
            <span>
              <ReviewIcon type={type ?? ''} />
            </span>{' '}
            {pageHeader}
          </span>
        )}
      </h1>
      <div>
        {(() => {
          if (loading) {
            return <Loader />;
          }
          if (pageData.length > 0) {
            return (
              <>
                <div className="review-sort-container">
                  Sort By
                  <select
                    value={sort}
                    onChange={function (event) {
                      setSort(event.target.value as SORT_OPTIONS);
                      fetchAlbums(
                        setLoading,
                        setPageData,
                        type,
                        event.target.value as SORT_OPTIONS
                      );
                    }}
                  >
                    {(
                      Object.keys(SORT_OPTIONS) as Array<
                        keyof typeof SORT_OPTIONS
                      >
                    ).map(function (opt) {
                      return (
                        <option key={opt} value={SORT_OPTIONS[opt]}>
                          {SORT_NAMES[SORT_OPTIONS[opt]]}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="review-card-container">
                  {pageData.map(function (review: ReviewCardType) {
                    return <ReviewCard key={review._id} review={review} />;
                  })}
                </div>
              </>
            );
          }
          return (
            <div>No {pageHeader} Content Found. Please Try again later!</div>
          );
        })()}
      </div>
    </div>
  );
}
