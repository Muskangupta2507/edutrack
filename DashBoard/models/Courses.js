import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);
export default Course;