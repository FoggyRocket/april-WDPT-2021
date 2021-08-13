const { Router } = require("express");
const router = Router();
const {
    signupProcess,
    loginProcess,
    getCurrentUser,
    logoutProcess
} = require("../controllers/auth.controller")

router.post("/signup", signupProcess);


router.post("/login",loginProcess);

router.get("/logout",logoutProcess)

router.get("/confirm/:confirmationCode",getCurrentUser)

router.get("/current-user",getCurrentUser)