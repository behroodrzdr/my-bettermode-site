import { gql, useQuery } from "@apollo/client";

const GET_POST_DETAILS = gql`
  query GetPostDetails($id: ID!) {
    post(id: $id) {
      id
      title
      content
      likes
    }
  }
`;

const usePostDetails = (id: string) => {
  const { data, loading, error } = useQuery(GET_POST_DETAILS, {
    variables: { id },
  });

  return { post: data?.post, loading, error };
};

export default usePostDetails;
