const express = require("express");
const passport = require("passport");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { authRoute } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.rotes");
const cookieParser = require("cookie-parser");
const { bookingRouter } = require("./routes/booking.route");
const { roomRouter } = require("./routes/room.route");

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
/*------------ Home Route--------- */
app.get("/", (req, res) => {
	res.send("Welcome to the Meeting Room Booking Application");
});

/* -----auth routes------ */

app.use("/auth", authRoute);
app.use("/user", userRouter);
app.use("/booking", bookingRouter);
app.use("/room",roomRouter)
// Not found route
app.use((req, res) => {
	res.status(404).send("Route not found");
});

// Start the server
app.listen(8080, async () => {
	connection();
	console.log("Server is running on port 8080");
});
