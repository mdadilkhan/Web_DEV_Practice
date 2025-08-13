import mongoose, { Schema, Document } from 'mongoose';

export interface ISection extends Document {
  title: string;
  course: mongoose.Types.ObjectId;
  lectures: mongoose.Types.ObjectId[];
}

const sectionSchema = new Schema<ISection>(
  {
    title: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
  },
  { timestamps: true }
);

export const Section =
  mongoose.models.Section || mongoose.model<ISection>('Section', sectionSchema);
