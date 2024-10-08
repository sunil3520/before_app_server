const { config } = require("dotenv");
var jwt = require("jsonwebtoken");



const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    if (decoded) {
      req.body.USER_ID = decoded.USER_ID;
      next();
    } else {
      res.status(400).send({ msg: "Login Token Error" });
    }
  } else {
    res.status(400).send({ msg: "Token Not Found" });
  }
};

module.exports = {
  auth,
};
