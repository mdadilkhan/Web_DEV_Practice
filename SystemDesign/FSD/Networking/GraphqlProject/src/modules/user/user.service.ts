import mongoose from 'mongoose';
import { User } from './user.model';

export const getAllUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const createUser = async (name: string, email: string, password: string, role: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const user = new User({ name, email, password, role });
  return await user.save();
};


export const enrollInCourse = async (userId: string, courseId: string) => {
  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    throw new Error("Invalid course ID");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  // Avoid duplicate enrollments
  if (user.enrolledCourses.includes(courseId)) {
    return "Already enrolled in this course";
  }

  user.enrolledCourses.push(courseId);
  await user.save();

  return "Enrolled successfully";
};
