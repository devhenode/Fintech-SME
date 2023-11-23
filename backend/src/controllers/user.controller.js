const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const secret = process.env.SECRET

const createToken = (id) => {
  return jwt.sign({ id }, secret, { expiresIn: "3d" });
};

// sign up use controller function
// method: POST

const signUpUser = async (req, res) => {
  const { name, password, email, phoneNumber } = req.body;
  try {
    if (!email || !password) {
      throw Error("All fields are required");
    }
    if (!validator.isEmail(email)) {
      throw Error("Not valid email");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password not strong enough");
    }

    //check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      throw Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      password: hash,
      email,
      phoneNumber,
    });

    const id = user._id;

    const token = await createToken(id);

    res.status(200).send({ id, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
// method: POST

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw Error("All fields are required");
    }
    const user = await User.findOne({ email });

    if (!user) {
      throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }

    const id = user._id;
    const token = createToken(id);
    res.status(200).send({ id, email, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// user profile
// method: GET

const userProfile = async (req, res) => {
  try {
    const {id}=req.user
    const user = await User.findById(id).select("-password -__v");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = { signUpUser, loginUser, userProfile };
