const typeDefs = `

    type User {

    }

    type Book {

    }

    type Auth {
        
    }

    type Query {
        
        me: User
    }

    type Mutation {
            login()
            addUser
            saveBook
            removeBook
    }

`;

module.exports = typeDefs;