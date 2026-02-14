export type ReviewCardType = {
  _id: string;
  title: string;
  reviewType: string?;
  reviewTypeSlug: string?;
  creator: string;
  date: string;
  rating: number;
  slug: {
    current: string;
  };
  imageUrl: string;
  imageAlt: string;
};

export type ReviewType = {
  _id: string;
  title: string;
  creator: string;
  rating: number;
  date: string;
  slug: {
    current: string;
  };
  authorName: string;
  authorImageUrl: string;
  authorImageAlt: string;
  body: TypedObject[];
  imageUrl: string;
  imageAlt: string;
};
