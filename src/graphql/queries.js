import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      slug
      title
      coverPhoto {
        url
      }
      id
      content {
        html
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

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthInfo($slug: String!) {
    author(where: { slug: $slug }) {
      post {
        coverPhoto {
          url
        }
        title
        id
        slug
      }
      field
      name
      description {
        html
      }
      avatar {
        url
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
