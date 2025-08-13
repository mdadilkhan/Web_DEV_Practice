import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"; // this pacakge is used only to merge modular typeDefs and resolver of diff modules
import { userTypeDefs } from "./modules/user/user.typeDefs";
import { userResolvers } from "./modules/user/user.resolver";
import { courseResolvers } from "./modules/course/course.resolver";
import { courseTypeDefs } from "./modules/course/course.typeDefs";

export const typeDefs = mergeTypeDefs([
  userTypeDefs,
  courseTypeDefs,
  // you can cadd adny no of typeDef here,
]);



export const resolvers = mergeResolvers([
  userResolvers,
  courseResolvers,
  // you can cadd adny no of resolver to merge here,
]);
