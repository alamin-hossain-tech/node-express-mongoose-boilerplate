import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});

const todoModel = mongoose.model("Todo", todoSchema);

export default todoModel;
