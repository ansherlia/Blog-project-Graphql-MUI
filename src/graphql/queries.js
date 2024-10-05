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

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        name
        field
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      slug
      title
    }
  }
`;

const GET_COMMENTS_POST = gql`
  query getCommentPost($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      name
      id
      comment
    }
  }
`;

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_INFO,
  GET_COMMENTS_POST,
  GET_BLOG_INFO,
};
