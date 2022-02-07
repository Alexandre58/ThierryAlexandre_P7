const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersControllers");
const auth = require("../middlewares/auth");

// localhost:4000/user/sign-up
router.post("/user/sign-up/", usersControllers.signup);
// localhost:4000/user/login
router.post("/user/login/",usersControllers.login);
// localhost:4000/user/recup all users
router.get("/all/user/", usersControllers.getAllOtherUser);

router.get("/users/profile/", auth, usersControllers.getUserProfile);
router.get("/:userId/profile/", auth, usersControllers.getOtherUserProfile);

router.put("/users/profile/", auth, usersControllers.updateUserProfile);
router.put("/users/firstname/", auth, usersControllers.updateFirstname);
router.put("/users/lastname/", auth, usersControllers.updateLastname);
router.put("/users/email/", auth, usersControllers.updateEmail);
router.put("/users/password/", auth, usersControllers.updatePassword);
router.put("/users/:id", auth, usersControllers.giveAdminOtherUser);
router.delete("/user/:id", auth, usersControllers.deleteUser);
module.exports = router;
