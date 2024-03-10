const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const { signToken } = require('../utils/auth');
const { Book, User } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Query.find({});
        }, 

    }, 
    Mutation: {
        // login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError('Invalid credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError('Invalid credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        // addUser
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
        saveBook: async (parent, args) => {
            const book = await Book.create(args);
            return book;
        },
        removeBook: async (parent, { bookId}) => {
            const book = await Book.findOneAndDelete(
                { bookId },
            )

            return book;
        },
    },
};

module.exports = resolvers;