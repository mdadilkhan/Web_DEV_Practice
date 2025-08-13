export const courseTypeDefs=`#graphql
  type Course {
    _id: ID!
    title: String!
    description: String
    instructor: User!
    # sections: [Section!]!
    enrolledStudents: [User!]!
    category: String
    createdAt: String!
    updatedAt: String!
  }

  type Query{
    courses:[Course!]!
    course(id:ID!):Course
  }


# input CreateCourseInput {
#     title: String!
#     description: String
#     instructor: ID!
#     category: String
#   }
#   type Mutation{
#     createCourse(input:CreateCourseInput!):Course!
#   }



`