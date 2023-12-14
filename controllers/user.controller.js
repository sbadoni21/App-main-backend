import User from "../mongodb/models/user";

const createUser = async (req, res) => {
  try {
    const {
      userId,
      referralId,
      fromReferralId,
      photo,
      name,
      email,
      coin,
      country,
      IPAddress,
      creationDate,
    } = req.body;

    const newUser = await User.create({
        userId,
        referralId,
        fromReferralId,
        photo,
        name,
        email,
        coin,
        country,
        IPAddress,
        creationDate, 
    });
    return res.status(200).json({ message: "New User Added Successfully", User: newUser });
  } catch (error) {
    return res.status(200).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        
        return res.status(200).json(users);
    } catch (error) {
        return res.status(200).json({ message: error.message });
    }
}

export{
    createUser,
    getAllUsers,
}
