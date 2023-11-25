const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;


exports.isAuth = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token){
        throw new Error("No token provided");
      }
  
      const decoded = await jwt.verify(token, secret);
      if (!decoded) {
        throw new Error("Unauthorized");
      }
      req.user = decoded;
  
      next();
    } catch (e) {
        res.status(403).json({ message: e.message });
    }
  };

