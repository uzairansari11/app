const express = require("express");
const { authorization } = require("../middlewares/jwt.middleware");

const userRouter = express.Router();

userRouter.get("/check", authorization, (req, res) => {
	try {
		res.status(200).send({
			ok: true,
			message: "User is Logged In",
			user: req.user,
		});
	} catch (error) {
		res.status(200).json({ ok: false, message: error.message });
	}
});

module.exports = { userRouter };
