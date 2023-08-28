const express = require("express");
const passport = require("passport");
const OIDCStrategy = require("passport-azure-ad").OIDCStrategy;
const session = require("express-session");

const app = express();

// Set up session middleware
app.use(
	session({
		secret: "your-secret-key",
		resave: true,
		saveUninitialized: false,
	})
);

// Set up Passport.js
passport.use(
	new OIDCStrategy(
		{
			// Configure OIDC strategy with client ID, client secret, and callback URL
			clientID: "your-client-id",
			clientSecret: "your-client-secret",
			redirectURL: "http://localhost:3000/auth/callback",
			identityMetadata:
				"https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration",
			responseType: "code id_token",
			responseMode: "form_post",
		},
		(accessToken, refreshToken, profile, done) => {
			// Handle authentication and store user profile as needed
			// Call done() when authentication is successful
			done(null, profile);
		}
	)
);

// Initialize Passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// Define routes for authentication
app.get(
	"/login",
	passport.authenticate("azuread-openidconnect", { failureRedirect: "/" })
);
app.post(
	"/auth/callback",
	passport.authenticate("azuread-openidconnect", { failureRedirect: "/" }),
	(req, res) => {
		// Redirect or handle successful authentication
		res.redirect("/dashboard");
	}
);

// ... other routes and app setup

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
