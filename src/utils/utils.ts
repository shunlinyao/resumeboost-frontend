import { Review } from "../interfaces/Review";

const getAvergeFromReviews = (
  reviews: Review[],
  metric: "content" | "relevance" | "visual"
): number => {
  if (reviews.length === 0) {
    return 0;
  }
  const total = reviews.reduce((acc, item) => acc + item[metric], 0);
  return total / reviews.length;
};

export default {
  getAvergeFromReviews,
};
