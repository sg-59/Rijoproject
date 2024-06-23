const jwt = require("jsonwebtoken");
// authenticateToken
const verifyAuthToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(401).json({ message: "You are not authenticated" });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }
      console.log(req.params.id, " request prams id")
      console.log(user.id, "user id from backend")
      if (req.params.id && req.params.id !== user.id) {
        return res
          .status(403)
          .json({ message: "You are not allowed to access this resource" });
      }
      next();
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = verifyAuthToken;
