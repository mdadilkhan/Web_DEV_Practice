import { Course } from "./course.model";


export const getAllCourses = async () => {
  return await Course.find();
};

export const getCourseById = async (id: string) => {
  return await Course.findById(id)
};

export const getCoursesOfUser=async(ids: string[])=>{
 return await Course.find({ _id: { $in: ids } });
}


// export const createCourse = async (name: string, email: string) => {
//   const user = new Course({ name, email });
//   return await user.save();
// };