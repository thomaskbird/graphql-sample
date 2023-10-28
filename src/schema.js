export const typeDefs = `#graphql
  type Post {
    id: ID!
    title: String!
    description: String!
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
  }

  type Author {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
`;
