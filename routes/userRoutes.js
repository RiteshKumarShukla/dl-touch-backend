const express = require("express");
const {
    registerController,
    loginController,
    singleUser,
    getAllUser,
    userUpdate,
    deleteUser,
    resetpassword,
    sendUserPasswordResetEmail,
    saveUserForgotPassword,
} = require("../controllers/userController");
const authorisation = require("../middlewares/authenticate.middleware");
const userRoute = express.Router();

userRoute.get("/", getAllUser);
userRoute.post("/register", registerController);
userRoute.post("/login", loginController);
userRoute.get("/:id", singleUser);
userRoute.delete("/delete/:id", deleteUser);
userRoute.post("/resetpassword", authorisation, resetpassword);
userRoute.post("/forgotpassword", sendUserPasswordResetEmail);
userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword);




//all users
userRoute.get("/", getAllUser);
// register

userRoute.post("/register", registerController);
// login

userRoute.post("/login", loginController);
//single user

//all users
userRoute.get("/:id", singleUser);
// update user profile

userRoute.patch("/update/:id", userUpdate);
// delete user

userRoute.delete("/delete/:id", deleteUser);
//update password
userRoute.post("/resetpassword", authorisation, resetpassword);



// send email forget password

userRoute.post("/forgotpassword", sendUserPasswordResetEmail);

//save forgot password
userRoute.post("/saveforgotpassword/:id/:token", saveUserForgotPassword);

module.exports = userRoute;
