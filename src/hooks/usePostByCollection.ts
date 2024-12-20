import { useLazyQuery } from "@apollo/client";
import { GET_POSTS_BY_COLLECTION } from "graphql/posts";
import { UsePostsResult, PostVariables, GetPostsByCollectionResponse } from 'types/posts';

const usePostsByCollection = (): UsePostsResult => {
  const [fetchPostsByCollection, { data, loading }] = useLazyQuery<GetPostsByCollectionResponse, PostVariables>(GET_POSTS_BY_COLLECTION);

  const posts = data?.posts;

  return {
    posts,
    loading,
    fetchPostsByCollection,
  };
};

export default usePostsByCollection;
