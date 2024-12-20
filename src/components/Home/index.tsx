import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import usePostByCollection from "@/hooks/usePostByCollection";
import useCollection from "hooks/useCollection";
import { PostVariables, Node } from 'types/posts';
import Loading from 'components/shared/Loading';
import Card from 'components/Card';
import Hero from 'components/Hero';
import { EdgesNode} from 'types/collection';

const PostGallery = () => {
  const { collections } = useCollection();
  const { fetchPostsByCollection, loading: postsLoading } = usePostByCollection();
  const [finalCollectionsWithPosts, setFinalCollectionsWithPosts] = useState<Array<{ edge: EdgesNode, posts: Node[] }>>([]);

  // Combine collections and posts after fetching
  useEffect(() => {
    const fetchAndCombineData = async () => {
      if (!collections || collections.length === 0) return;

      const combinedData: Array<{ edge: EdgesNode ; posts: Node[] }> = [];

      const fetchPromises = collections.flatMap(collection =>
        collection.spaces.edges.map(async (edge) => {
          const variables: PostVariables = {
            limit: 6,
            spaceIds: [edge.node.id],
            postTypeIds: ["5lxqjpAgomTtGB4"],
            orderByString: "publishedAt",
            reverse: false,
            filterBy: [],
          };
  
          const { data } = await fetchPostsByCollection({ variables });
          if (data?.posts?.nodes) {
            combinedData.push({ edge: edge.node, posts: data.posts.nodes });
          }
        })
      );

      await Promise.all(fetchPromises);
      setFinalCollectionsWithPosts(combinedData);
    };

    fetchAndCombineData();
  }, [collections, fetchPostsByCollection]);
  

  return (
    <div className="w-full flex flex-col max-w-full md:max-w-8xl self-center space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10 py-3 sm:py-3.5 md:py-4 lg:py-5 px-0 sm:px-0 md:px-0 lg:px-0">
      <div>
        <Hero />
        {finalCollectionsWithPosts?.map(({ edge, posts }) => (
          <div className="my-8" key={edge.id}>
            <div className="flex justify-between items-end">
              <div className="px-4 sm:px-0 min-w-0 break-words pb-5">
                <div className="space-y-2">
                  <h3 className="font-medium text-heading-xs text-content-on-background">{edge.name}</h3>
                </div>
              </div>
              <Link to="/" className="cursor-pointer rounded-base transition duration-200 focus:outline-none focus-visible:ring text-link hover:text-link-hovered ring-link pb-5 mx-2 sm:mx-0 truncate">View All →</Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ marginInline: '-12px -1px', paddingInline: '12px 1px'}}>
                <div className="flex items-stretch snap-x h-auto space-s-2 pt-1 pb-4">
                  {!postsLoading ? posts?.map((post) => 
                    <Card 
                      id={post.id}
                      textContent={post.textContent}
                      thumbnail={post.thumbnail}
                      title={post.title}
                    />
                  ) : <Loading />
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default PostGallery;
