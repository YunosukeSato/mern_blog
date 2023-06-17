const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: "access token doesn't exist" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(400).json({ message: "invalid access token" });
      } else {
        req.username = decoded.username;
        next();
      }
    });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = verifyToken;
