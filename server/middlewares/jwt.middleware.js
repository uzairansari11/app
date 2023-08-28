const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
	const token = req.headers?.authorization;
	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			return res
				.status(401)
				.json({ ok: false, message: "Unauthorized: Please Login First" });
		}
		req.body.userId = decoded.user._id;
		next();
	});
};

module.exports = {
	authorization,
};
