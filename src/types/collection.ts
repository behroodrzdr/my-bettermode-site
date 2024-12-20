export interface EdgesNode {
    imageId: string,
    isHomepage: boolean,
    name: string,
    relativeUrl: string,
    slug: string,
    url: string,
    id: string,
}

export interface PageInfo {
    endCursor: string,
    hasNextPage: boolean,
}

export interface Collection {
    createdAt: Date,
    description: string,
    id: string,
    name: string,
    relativeUrl: string,
    slug: string,
    spaces: {
        edges: Array<{ node: EdgesNode }>,
        nodes: Array<Node>,
        pageInfo: PageInfo,
    }
}

export interface UsePostsResult {
    collections: Array<Collection>;
    loading: boolean;
}