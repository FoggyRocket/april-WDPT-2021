const { Router } = require("express");
const router = Router();
const {
    signupProcess,
    loginProcess,
    getCurrentUser,
    logoutProcess,
    confirmationCode
} = require("../controllers/auth.controller")

router.post("/signup", signupProcess);


router.post("/login",loginProcess);

router.get("/logout",logoutProcess)

router.get("/confirm/:confirmationCode",confirmationCode)

router.get("/current-user",getCurrentUser)

module.exports = router;