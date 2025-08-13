import mongoose, { Schema, Document } from 'mongoose';

export interface ILecture extends Document {
  title: string;
  videoUrl: string;
  section: mongoose.Types.ObjectId;
  duration: number; // in minutes
  isFreePreview: boolean;
}

const lectureSchema = new Schema<ILecture>(
  {
    title: { type: String, required: true },
    videoUrl: { type: String, required: true },
    section: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
    duration: { type: Number }, // optional field for UI
    isFreePreview: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Lecture =
  mongoose.models.Lecture || mongoose.model<ILecture>('Lecture', lectureSchema);
