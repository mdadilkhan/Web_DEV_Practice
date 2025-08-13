import * as UserService from './user.service'


export const getAllUsers=async()=>{
    return await UserService.getAllUsers()
}


export const getUserById=async(_:any,{id}:{id:string})=>{
    return await UserService.getUserById(id);
}



export const createUser = async (_: any, args: any) => {

    // console.log("args>>>",args);
    
  const { name, email, password, role } = args;

  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required.");
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Invalid email format.");
  }

  return await UserService.createUser(name, email, password, role);

};


export const enrolledCourse = async (_: any, args:any, context: any) => {
    //     console.log(_);
    // console.log(args);
    // console.log("context>>",context);
//   const userId = context.user?._id; // user id shoudl come from token so extract it from context
  const userId=args.userId
  if (!userId) {
    throw new Error("Authentication required");
  }

  return await UserService.enrollInCourse(args.userId, args.courseId);
};
