export const userTypeDefs = `#graphql

  type User {
    _id: ID!
    name: String!
    email: String!
    password: String
    role: String
    enrolledCourses: [Course!]!
  }

  type Query {
    users: [User]             # Get all users
    user(id: ID!): User       # Get single user by ID
  }




  # in mutation of typeDef  we use to define method only which is ised to update data in db and that method should be presnt in mutation of resolver right
  type Mutation {
    createUser(name: String!, email: String!,password:String!,role:String): User,  # Create a user with name and email
    enrolledCourses(userId: ID!, courseId: ID!): String
  }
`;
