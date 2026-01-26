import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import client from '@/utils/client';
import Loader from '@/Components/Loader/Loader';
import type { ReviewType } from '@/types/review';
import { ROUTES } from '@/constants/routes';
import { sentenceCase } from '@/utils/sentenceCase';
import './Review.css';

export default function Review() {
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<ReviewType | null>(null);
  const { type, review } = useParams();

  useEffect(
    function getData() {
      async function fetchAlbums() {
        setLoading(true);
        const data = await client.fetch(
          `*[_type == "review" && slug.current == "${review}"]{
            _id,
            title,
            creator,
            "authorName": author->name,
            "authorImageUrl": author->image.asset->url,
            "authorImageAlt": author->image.alt,
            body,
            slug,
            "imageUrl": image.asset->url,
            "imageAlt": image.alt,
          }`
        );
        setPageData(data[0]);
        setLoading(false);
      }
      fetchAlbums();
    },
    [review]
  );
  return (
    <div className="review-container">
      {(() => {
        if (loading) {
          return <Loader />;
        }
        if (pageData) {
          return (
            <>
              <Link to={ROUTES.type.replace(':type', type ?? '')}>
                &lt; Back to {sentenceCase(type ?? '')}
              </Link>
              <h1>
                {pageData.title}{' '}
                <span className="creator">{pageData.creator}</span>
              </h1>

              <div className="author-section">
                {pageData.authorImageUrl && (
                  <img
                    src={pageData.authorImageUrl}
                    alt={pageData.authorImageAlt}
                  />
                )}
                <div>Written by {pageData.authorName}</div>
              </div>
              <img className='main-image' src={pageData.imageUrl} alt={pageData.imageAlt} />
              <div>
                <PortableText value={pageData.body} />
              </div>
            </>
          );
        }
        return <div>Review Not Found. Please Try again later!</div>;
      })()}
    </div>
  );
}
