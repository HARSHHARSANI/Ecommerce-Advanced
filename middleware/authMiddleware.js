import admin from "../firebase/index.js";
import userModel from "../Models/userModel.js";

export const authCheck = async (req, res, next) => {
  // console.log(req.headers);
  try {
    // console.log("Token received:", req.headers.authtoken);

    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    // console.log("Firebase user in auth check", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error :-> Invalid Token Or Token Expired",
      error,
    });
  }
};

export const adminCheck = async (req, res, next) => {
  const { email } = req.user;

  const adminUser = await userModel.findOne({ email });

  if (adminUser.role !== "admin") {
    res.status(403).send({
      success: false,
      message: "Admin Resource. Access Denied",
    });
  } else {
    next();
  }
};
