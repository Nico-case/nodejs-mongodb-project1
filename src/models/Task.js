import { Schema, model } from "mongoose";

const taskSchema = Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    done: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", taskSchema);
