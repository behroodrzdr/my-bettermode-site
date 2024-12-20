import { gql } from "@apollo/client";

export const GetCollections = gql`
query GetCollections($orderBy: CollectionListOrderByEnum, $reverse: Boolean) {
    collections(orderBy: $orderBy, reverse: $reverse) {
      id
      slug
      name
      description
      createdAt
      relativeUrl
      url
      spaces(limit: 100) {
        totalCount
        edges {
          node {
            id
            networkId
            name
            description
            slug
            type
            layout
            isHomepage
            address {
              path
              exact
              editable
            }
            createdById
            groupId
            imageId
            bannerId
            membersCount
            createdAt
            updatedAt
            private
            hidden
            inviteOnly
            nonAdminsCanInvite
            customOrderingIndexInGroup
            whoCanPost
            whoCanReact
            whoCanReply
            customSeoDetail {
              description
              noIndex
              thumbnail {
                ... on Image {
                  __typename
                  id
                  url
                  width
                  height
                  dominantColorHex
                  dpi
                  cropHeight
                  cropWidth
                  cropX
                  cropY
                  cropZoom
                  urls {
                    __typename
                    full
                    large
                    medium
                    small
                    thumb
                  }
                }
                ... on Emoji {
                  __typename
                  id
                  text
                }
                ... on Glyph {
                  __typename
                  id
                  text
                  variant
                }
                ... on File {
                  id
                  name
                  url
                }
              }
              thumbnailId
              title
            }
            relativeUrl
            url
            image {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
              }
            }
            banner {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
              }
            }
            authMemberProps {
              context
              lastReadAt
              membershipStatus
              scopes
              unreadPostsCount
              subscribed
            }
            slate {
              rootBlock
              blocks {
                id
                name
                props
                extraProps
                children
                output
              }
              restrictions {
                nonEditableBlocks
                lockedChildrenBlocks
                nonRemovableBlocks
              }
            }
          }
        }
        nodes {
          id
          networkId
          name
          description
          slug
          type
          layout
          isHomepage
          address {
            path
            exact
            editable
          }
          createdById
          groupId
          imageId
          bannerId
          membersCount
          createdAt
          updatedAt
          private
          hidden
          inviteOnly
          nonAdminsCanInvite
          customOrderingIndexInGroup
          whoCanPost
          whoCanReact
          whoCanReply
          customSeoDetail {
            description
            noIndex
            thumbnail {
              ... on Image {
                __typename
                id
                url
                width
                height
                dominantColorHex
                dpi
                cropHeight
                cropWidth
                cropX
                cropY
                cropZoom
                urls {
                  __typename
                  full
                  large
                  medium
                  small
                  thumb
                }
              }
              ... on Emoji {
                __typename
                id
                text
              }
              ... on Glyph {
                __typename
                id
                text
                variant
              }
              ... on File {
                id
                name
                url
              }
            }
            thumbnailId
            title
          }
          relativeUrl
          url
          image {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
            }
          }
          banner {
            ... on Image {
              __typename
              id
              url
              width
              height
              dominantColorHex
              dpi
              cropHeight
              cropWidth
              cropX
              cropY
              cropZoom
              urls {
                __typename
                full
                large
                medium
                small
                thumb
              }
            }
            ... on Emoji {
              __typename
              id
              text
            }
            ... on Glyph {
              __typename
              id
              text
              variant
            }
            ... on File {
              id
              name
              url
            }
          }
          authMemberProps {
            context
            lastReadAt
            membershipStatus
            scopes
            unreadPostsCount
            subscribed
          }
          slate {
            rootBlock
            blocks {
              id
              name
              props
              extraProps
              children
              output
            }
            restrictions {
              nonEditableBlocks
              lockedChildrenBlocks
              nonRemovableBlocks
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;