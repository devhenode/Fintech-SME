const express = require("express")
const { signUpUser, loginUser, userProfile } = require("../controllers/user.controller")
const { isAuth } = require("../middleware/auth");
const { onboardClient, getClients } = require("../controllers/client.controller");

const router = express.Router()


router.post('/signup', signUpUser);
router.post('/login', loginUser);

router.get('/profile', isAuth, userProfile);

router.post("/client", isAuth, onboardClient);
router.get("/clients", isAuth, getClients);

module.exports = router