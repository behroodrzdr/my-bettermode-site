import { useQuery } from "@apollo/client";
import { GetCollections } from "graphql/collection";
import { UsePostsResult } from 'types/collection';

const useCollections = (): UsePostsResult => {
  const { data, loading } = useQuery(GetCollections, {});

  const collections = data?.collections || [];

  return {
    collections,
    loading,
  };
};

export default useCollections;
