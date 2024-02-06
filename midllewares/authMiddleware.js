const JWT=require('jsonwebtoken')
//tab tak hume token nhi milega aur vo authorize nhi hoga toh vo aage nhi badega vo hume error show kr dega
 
module.exports = async (req, res, next) => {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      JWT.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (err) {
          return res.status(401).send({
            success: false,
            message: "Auth Failed",
          });
        } else {
          req.body.userId = decode.userId; //decode ke andar user hai aur user ke andar id hai
          next();
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        success: false,
        error,
        message: "Auth Failedd",
      });
    }
  };