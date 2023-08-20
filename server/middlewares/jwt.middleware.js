const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
	const token = req.headers?.authorization;
	console.log("token", token);
	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
		if (err) {
			console.log(err.message);
			return res
				.status(401)
				.json({ ok: false, message: "Unauthorized: Please Login First" });
		}
		req.body.userId = decoded.user._id;
		console.log(decoded.user._id, "decode");
		next();
	});
};

module.exports = {
	authorization,
};
