import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, },
    password: { type: String, required: true },
    name: { type: String, required: true, },
  },
  { timestamps: true }
);

const signUpModel = mongoose.model("Signup", SignupSchema);

export default signUpModel;
