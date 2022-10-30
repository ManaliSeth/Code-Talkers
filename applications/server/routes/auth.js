const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validate(req.body);

    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    const token = await user.generateAuthToken();
    // console.log(token);
    res.cookie("jwttoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    res.status(200).send({ data: token, message: "Logged In successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });

  return schema.validate(data);
};

//code to Text page after login

router.get("/codeToText", authenticate, (req, res) => {
  console.log(req.body);
  res.send(req.rootUser);
});

//get user data for feedback
router.get("/getdata", authenticate, (req, res) => {
  console.log("hello");
  res.send(req.rootUser);
});

router.get("/logout", (req, res) => {
  console.log(`Hello my logout page`);
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
