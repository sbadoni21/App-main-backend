import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userId: { type: Number, required: true, default: 0 },
    referralId: { type: String, required: true, default: " " },
    fromReferralId: { type: String, required: true, default: " " },
    photo: { type: String, required: true, default: " " },
    name: { type: String, required: true, default: " " },
    email: { type: String, required: true, default: " " },
    coin: { type: Number, required: true, default: 0 },
    country: { type: String, required: true, default: " " },
    IPAddress: { type: String, required: true, default: " " },
    accountStatus: { type: String, required: true, default: "Active" },
    creationDate: { type: String, required: true, default: " " },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
