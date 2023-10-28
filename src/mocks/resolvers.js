import {MOCK_AUTHORS, MOCK_POSTS, MOCK_REVIEWS} from './db.js';

const resolvers = {
  Query: {
    posts: () => {
      return MOCK_POSTS;
    },
    post: (_, args) => {
      return MOCK_POSTS.find(post => post.id === args.id);
    },
    authors: () => {
      return MOCK_AUTHORS;
    },
    author: (_, args) => {
      return MOCK_AUTHORS.find(author => author.id === args.id);
    },
    reviews: () => {
      return MOCK_REVIEWS;
    },
    review: (_, args) => {
      return MOCK_REVIEWS.find(review => review.id === args.id);
    },
  }
};

export default resolvers;
