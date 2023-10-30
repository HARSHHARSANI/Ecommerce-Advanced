import userModel from "../Models/userModel.js";

export const createOrUpdateUserController = async (req, res) => {
  try {
    const { name, picture, email } = req.user;
    const user = await userModel.findOneAndUpdate(
      { email },
      { name: email.split("@")[0], picture },
      { new: true }
    );

    if (user) {
      console.log("User Updated :->", user);
      res.json(user);
    } else {
      const newUser = await new userModel({
        email,
        name: email.split("@")[0],
        picture,
      }).save();
      console.log("User Created :->", newUser);
      res.json(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

export const currentUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};
