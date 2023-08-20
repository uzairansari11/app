const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const authRoute = express.Router();

// Configure session middleware
authRoute.use(
	session({
		secret: process.env.SECRET_KEY,
		resave: true,
		saveUninitialized: true,
	})
);
// Initialize Passport
authRoute.use(passport.initialize());
authRoute.use(passport.session());

// Configure the Google Strategy
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

				if (!user) {
					const name = profile._json.name;
					const profilePic =
						profile._json.picture ||
						"https://cdn.filestackcontent.com/RuEgtpvGSbidugrFz91z";

					user = new UserModel({
						name,
						email,
						profilePic,
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

// Serialize user data into the session
passport.serializeUser((user, done) => {
	done(null, user);
});

// Deserialize user data from the session
passport.deserializeUser((user, done) => {
	done(null, user);
});

// Define routes
authRoute.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

authRoute.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		// Redirect or handle successful authentication
		const user = req.user; // Access user data from the request object
		const token = jwt.sign({ user }, process.env.SECRET_KEY);
		const plainUser = user.toObject();

		const tokenAndUserData = {
			token,
			...plainUser,
		};

		// Set the token as a cookie
		res.cookie("authToken", JSON.stringify(tokenAndUserData), {
			maxAge: 24 * 60 * 60 * 1000,
		});

		res.redirect(`http://localhost:3000/dashboard`);
	}
);
// authRoute.get("/logout", async (req, res) => {
// 	try {
// 		// Get the token from the cookie
// 		console.log(req.cookies, "my ccc");
// 		const authTokenCookie = req.cookies.authToken;

// 		if (!authTokenCookie) {
// 			return res
// 				.status(400)
// 				.json({ ok: false, message: "No authToken cookie found" });
// 		}

// 		const tokenAndUserData = JSON.parse(authTokenCookie);

// 		const token = tokenAndUserData.token;

// 		// Check if the token is already blacklisted
// 		const isTokenBlacklisted = await BlacklistedTokenModel.exists({ token });

// 		if (!isTokenBlacklisted) {
// 			// Add the token to the blacklisted tokens collection
// 			const newBlacklistedToken = new BlacklistedTokenModel({ token });
// 			await newBlacklistedToken.save();
// 		}

// 		// Clear the authToken cookie
// 		res.clearCookie("authToken");

// 		return res.status(200).json({ ok: true, message: "Logout successful" });
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json({ ok: false, message: error });
// 	}
// });

module.exports = { authRoute };
