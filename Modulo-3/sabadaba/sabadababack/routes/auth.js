const { Router } = require("express");
const router = Router();
const {
    signupProcess,
    loginProcess,
    getCurrentUser,
    googleInit,
    googleCallback,
    logoutProcess
} = require("../controllers/auth.controller")
const {catchError} = require("../utils")

router.post("/signup", catchError(signupProcess))


router.post("/login",loginProcess);

router.get("/logout",logoutProcess)


router.get("/current-user",getCurrentUser)


router.get("/google", googleInit)
//http://localhost:3001/api/auth/google/callback
router.get("/google/callback",googleCallback)

module.exports = router;