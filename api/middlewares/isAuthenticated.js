const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "権限がありません。" });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "権限がありません。" });
        }

        console.log(decoded.id);
        req.userid = decoded.id;
        next();
    });
}

module.exports = isAuthenticated;
