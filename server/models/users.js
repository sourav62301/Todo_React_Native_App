import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must me atleast 8 characters long"],
  },
  avatar: {
    public_id: String,
    url: String,
  },
  tasks: [
    {
      title: String,
      description: String,
      completed: Boolean,
    },
  ],
});

export const User = mongoose.model("User", userSchema);
