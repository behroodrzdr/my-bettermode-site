// import { render, screen } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import { afterEach, describe, expect, it } from 'vitest';
// import usePosts from './usePosts';
// import { GET_POSTS } from './usePosts';
// import { act } from 'react-dom/test-utils';
// import React from 'react';

// // Test Component
// const TestComponent = ({ search }: { search: string }) => {
//   const { posts, loading } = usePosts({ search });

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       {posts.map(({ node }: any) => (
//         <div key={node.id} data-testid="post-item">
//           {node.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Mock Data
// const mocks = [
//   {
//     request: {
//       query: GET_POSTS,
//       variables: { cursor: null, filter: { search: 'React' } },
//     },
//     result: {
//       data: {
//         posts: {
//           edges: [
//             {
//               node: { id: '1', title: 'React Post', content: 'Content about React', likes: 15 },
//             },
//           ],
//           pageInfo: {
//             hasNextPage: false,
//             endCursor: null,
//           },
//         },
//       },
//     },
//   },
// ];

// describe('usePosts with payload', () => {
//   afterEach(() => {
//     vi.restoreAllMocks();
//   });

//   it('fetches and displays posts with a filter', async () => {
//     render(
//       <MockedProvider mocks={mocks} addTypename={false}>
//         <TestComponent search="React" />
//       </MockedProvider>
//     );

//     // Wait for loading
//     expect(screen.getByText('Loading...')).toBeInTheDocument();

//     // Wait for GraphQL to resolve
//     await act(async () => {
//       await new Promise((resolve) => setTimeout(resolve, 0));
//     });

//     // Verify filtered posts are rendered
//     const postItems = screen.getAllByTestId('post-item');
//     expect(postItems.length).toBe(1);
//     expect(postItems[0]).toHaveTextContent('React Post');
//   });
// });
