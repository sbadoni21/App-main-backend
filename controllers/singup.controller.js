import signUpModel from "../mongodb/models/signup.js";

const createSignUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newSignUp = await signUpModel.create({
      username,
      email,
      password,
    });
    if (!newSignUp) throw Error("Error while creating registration");
    return res.status(200).json(newSignUp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signUpModel.findOne({ email: email });
    if (user) {
      if (password != user.password) {
        return res.status(404).json({ message: "Invalid Password" });
      } else {
        return res.status(200).json({ message: "Success" });
      }
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createSignUp, loginUser };
