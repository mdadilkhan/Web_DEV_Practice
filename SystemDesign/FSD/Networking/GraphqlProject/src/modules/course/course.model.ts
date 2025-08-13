import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  sections: mongoose.Types.ObjectId[];
  enrolledStudents: mongoose.Types.ObjectId[];
  category: string;
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: String,
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    category: { type: String },
  },
  { timestamps: true }
);

export const Course =
  mongoose.models.Course || mongoose.model<ICourse>('Course', courseSchema);
