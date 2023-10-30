import admin from "../firebase/index.js";

export const authCheck = async (req, res, next) => {
  // console.log(req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);

    console.log("Firebase user in auth check", firebaseUser);
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
