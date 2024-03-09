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
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
            return { token, user };
          },
        // addUser
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
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