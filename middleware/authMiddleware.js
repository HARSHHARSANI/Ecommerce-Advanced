import admin from "../firebase/index.js";

export const authCheck = (req, res, next) => {
    
  console.log(req.headers);
  // Use the admin object as needed
  next( );
};

