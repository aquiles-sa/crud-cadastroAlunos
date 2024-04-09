const checkPassword = (req, res, next) => {
  const { password } = req.query;

  if (!password) {
    return res.status(401).json({ message: "Enter the password." });
  }

  if (password !== "class120") {
    return res.status(401).json({ message: "Invalid password." });
  }

  next();
};

module.exports = checkPassword;
