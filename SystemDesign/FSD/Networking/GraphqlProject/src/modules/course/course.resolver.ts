import { getUserById } from "../user/user.controller";
import { getAllCourses, getCourseById } from "./course.controller";

export const courseResolvers = {
  Query: {
    courses: getAllCourses,
    course: getCourseById,
  },
  // this is the fild resolver for instructor filed which is basically user id of role instructor
  // controller fucntion is used in two diff places thats why we cann it like this else do the second approach 
  Course: {
    instructor: async (parent: any) => {
      // console.log("parent>>",parent);
      return await getUserById(null, { id: parent.instructor });
    },
  },
//  Course: {
//     instructor:  getInstructor
//     },
//   },



  //   Mutation: {
  //     createCourse: async (
  //       _: any,
  //       { name, email }: { name: string; email: string }
  //     ) => await createUser(name, email),
  //   },


  
};
