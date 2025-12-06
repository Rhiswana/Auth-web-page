const user = require("../model/user");
const bcrypt = require("bcrypt");



const login = async (req, res) => {
  const { email, password } = req.body;

  const User = await user.findOne({ email });
  if (!User) {
    return res.send("Not registered user");
  }

  const same = await bcrypt.compare(password, User.password);

  if (!same) {
    return res.send("Invalid password");
  }

  res.send("Successfully login");
};

module.exports = login;
