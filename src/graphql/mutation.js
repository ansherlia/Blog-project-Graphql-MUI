import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
  mutation createComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { CREATE_COMMENT };
