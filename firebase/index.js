// firebase/index.js
import admin from "../node_modules/firebase-admin";
import serviceAccount from "../config/fbServiceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
