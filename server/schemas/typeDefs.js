const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql `
    
    type User {
        _id: ID
        username: String
        email: String
        stockCount: Int
        savedStocks: [Stock]
    }

    type Stock {
        _id: ID
        stockId: String
        symbol: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveStock:(symbol:String, description: String!, title: String!, stockId: String!, image: String, link: String): User
        removeStock(stockId: String!): User
    }

`;

module.exports = typeDefs;