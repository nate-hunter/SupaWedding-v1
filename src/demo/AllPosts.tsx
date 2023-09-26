import { useParams } from 'react-router-dom';

export const AllPosts = () => {
  const { pageNumber } = useParams();
  return <h2>All Posts... page: {pageNumber}</h2>;
};
