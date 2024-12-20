export interface Node {
    id: string;
    title: string;
    content: string;
    likes: number;
    createdAt: Date;
    description: string;
    status: string;
    textContent: string;
    url: string;
    slug: string;
    postTypeIds: string[],
    thumbnail: string | null,
    spaceId: string,
    shortContent: string;
}
export type PostVariables  = {
    limit: number;
    spaceIds: string[];
    postTypeIds: string[];
    orderByString: string;
    reverse: boolean;
    filterBy: Array<string>;
}
export interface PageInfo {
    endCursor: string,
    hasNextPage: boolean,
}
type PostsData = {
    nodes: Array<Node>,
    pageInfo: PageInfo,
    totalCount: number,
}

export interface GetPostsByCollectionResponse {
    posts?: PostsData,
    extensions: {
        complexity: number,
    }
}
export interface UsePostsResult {
    posts?: PostsData,
    loading: boolean;
    fetchPostsByCollection: ({ variables: PostVariables }) => { data: GetPostsByCollectionResponse },
  }
  
  