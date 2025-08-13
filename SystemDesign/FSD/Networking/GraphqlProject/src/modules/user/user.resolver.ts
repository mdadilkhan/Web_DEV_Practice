import { getAllUsers, getUserById,createUser,enrolledCourse } from './user.controller';
import { getCoursesOfUser } from '../course/course.controller';


export const userResolvers = {
  Query: {
    users:  getAllUsers,
    user:  getUserById,
  },

  // fieled level resolver
  //both ways or good
  
  // User:{
  //   enrolledCourses:async(parent:any)=>{
  //     console.log("parent>>",parent);
  //      return await getCoursesOfUser(parent.enrolledCourses);
  //   }
  // },
  User:{
    enrolledCourses:getCoursesOfUser
  },



  
  Mutation: {
    createUser: createUser,
    enrolledCourses:enrolledCourse
  },
};


