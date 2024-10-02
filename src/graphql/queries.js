import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      slug
      title
      coverPhoto {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;
export { GET_BLOGS_INFO };
