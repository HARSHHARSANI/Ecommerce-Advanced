import userModel from "../Models/userModel.js";

export const createOrUpdateUserController = async (req, res) => {
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
};
