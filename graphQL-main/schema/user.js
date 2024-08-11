import { buildSchema } from "graphql";

const schema = buildSchema(`

    type User {
        id: ID
        name: String
        age: Int
        gender: String
        email: String
        password: String
    }

    type Query {
        getUsers (id: ID!): User
    }

    input UserInput {
        name: String!
        age: Int!
        gender: String!
        email: String!
        password: String!
    }

    input UpdateUser{
        id: ID!
        name: String
        age: Int
        gender: String
        email: String
        password: String
    }

    type Mutation {
        createUser(input: UserInput): UserResponse
        updateUser(input: UpdateUser): UserResponse
        deleteUser(id: ID!): UserResponse
    }

    type UserResponse {
        success: Boolean
        message: String
        user: User
    }
`);

export default schema;
