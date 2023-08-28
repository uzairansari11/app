const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const authRoute = express.Router();

const sessionConfig = {
	secret: process.env.SECRET_KEY,
	resave: true,
	saveUninitialized: true,

	cookie: {
		maxAge: 24 * 60 * 60 * 1000,
	},
};
authRoute.use(session(sessionConfig));

authRoute.use(passport.initialize());
authRoute.use(passport.session());

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:8080/auth/google/callback",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const email = profile._json.email;
				let user = await UserModel.findOne({ email });
				console.log(accessToken, "accessToken", refreshToken, "refreshToken");
				if (!user) {
					const name = profile._json.name;
					const profilePic =
						profile._json.picture ||
						"https://cdn.filestackcontent.com/RuEgtpvGSbidugrFz91z";

					user = new UserModel({
						name,
						email,
						profilePic,
						refreshToken: refreshToken,
					});
					await user.save();
				}
				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

authRoute.get(
	"/google",
	passport.authenticate("google", {
		scope: [
			"profile",
			"email",
			"https://www.googleapis.com/auth/calendar.events",
		], // Add the Google Calendar scope
		accessType: "offline", // Request offline access
	})
);

authRoute.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		const user = req.user;
		const token = jwt.sign({ user }, process.env.SECRET_KEY, {
			expiresIn: "1d",
		});
		const plainUser = user.toObject();

		const tokenAndUserData = {
			token,
			...plainUser,
		};

		res.cookie("authToken", JSON.stringify(tokenAndUserData), {
			maxAge: 24 * 60 * 60 * 1000,
			secure: true,
		});

		res.redirect(`http://localhost:3000/dashboard`);
	}
);

module.exports = { authRoute };
