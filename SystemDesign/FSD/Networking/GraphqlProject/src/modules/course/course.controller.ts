import * as CourseService from './course.service'

export const getCourseById=async(_:any,{id}:{id:string})=>{
     return await CourseService.getCourseById(id)
}


export const getAllCourses=async()=>{
    return await CourseService.getAllCourses()
}

export const getCoursesOfUser=async(parent:any)=>{
    // console.log("courseIds>>",parent);
    
    // const courseIds = args.map((id: any) => id.toString());
  return await CourseService.getCoursesOfUser(parent.enrolledCourses);

}


// export const createCourse=async()=>{
//     return await CourseService.createCourse()
// }


