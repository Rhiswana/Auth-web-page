const User = require("../model/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res.send("User exists");
  }

  const Password = await bcrypt.hash(password, 10);

  const userName = new User({
    username,
    email,
    password: Password
  });

  await userName.save();
  res.send("successfully register");
};

module.exports = register;
