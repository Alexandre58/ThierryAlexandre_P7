const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN); // lien avec fichier .env
    const userId = decodedToken.userId;
    console.log(userId);
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      console.log(userId);
      next();
    }
  } catch {
    // invalid token
    res.status(401).json({
      error: "Vous N'avez pas l'autorisation Token !",
    });
  }
};