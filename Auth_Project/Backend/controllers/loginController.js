const User = require("../model/user");
const bcrypt = require("bcrypt");



const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });
  if (!findUser) {
    return res.send("Not registered user");
  }

  const same = await bcrypt.compare(password, findUser.password);

  if (!same) {
    return res.send("Invalid password");
  }

  res.send("Successfully login");
};

module.exports = login;
