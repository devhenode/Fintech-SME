const express = require("express")
const { signUpUser, loginUser, userProfile } = require("../controllers/user.controller")
const { isAuth } = require("../middleware/auth")

const router = express.Router()


router.post('/signup', signUpUser)
router.post('/login', loginUser)

router.get('/profile', isAuth, userProfile)

module.exports = router