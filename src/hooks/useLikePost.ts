import { gql, useMutation } from "@apollo/client";

const LIKE_POST = gql`
  mutation LikePost($id: ID!) {
    likePost(id: $id) {
      id
      likes
    }
  }
`;

const useLikePost = () => {
  const [likePost, { loading, error }] = useMutation(LIKE_POST);

  const handleLike = async (id: string) => {
    await likePost({
      variables: { id },
      optimisticResponse: {
        likePost: {
          id,
          likes: null, // Assuming you can handle likes increment on the UI optimistically
          __typename: "Post",
        },
      },
    });
  };

  return { handleLike, loading, error };
};

export default useLikePost;
