import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'instructor' | 'student';
  enrolledCourses: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    role: {
      type: String,
      enum: ['admin', 'instructor', 'student'],
      default: 'student',
    },
    enrolledCourses: [{ type: mongoose.Types.ObjectId, ref: 'Course' }],
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<IUser>('User', userSchema);
