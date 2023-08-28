// /* ---------------------------------------------------- */
// const { google } = require("googleapis");
// const express = require("express");
// const { BookingModel } = require("../models/booking.model");
// const { authorization } = require("../middlewares/jwt.middleware");

// bookingRouter.post("/", authorization, async (req, res) => {
// 	try {
// 		const { userId, roomId, date, startTime, endTime } = req.body;

// 		// Check room availability
// 		const existingBooking = await BookingModel.findOne({
// 			roomId,
// 			date,
// 			startTime: { $lt: endTime },
// 			endTime: { $gt: startTime },
// 		});

// 		if (existingBooking) {
// 			return res
// 				.status(409)
// 				.json({ message: "Room is not available at the requested time." });
// 		}

// 		const booking = new BookingModel({
// 			roomId,
// 			date,
// 			startTime,
// 			endTime,
// 			userId,
// 		});

// 		await booking.save();

// 		// Create an event in the user's Google Calendar
// 		const auth = req.user.googleAuthCredentials; // Assuming you store the user's Google auth credentials
// 		const calendar = google.calendar("v3");

// 		const event = {
// 			summary: "Meeting",
// 			description: "Meeting description",
// 			start: {
// 				dateTime: `${date}T${startTime}:00Z`,
// 				timeZone: "UTC", // Set the appropriate timezone
// 			},
// 			end: {
// 				dateTime: `${date}T${endTime}:00Z`,
// 				timeZone: "UTC",
// 			},
// 		};

// 		await calendar.events.insert({
// 			auth,
// 			calendarId: "primary",
// 			resource: event,
// 		});

// 		return res.status(201).json({ message: "Booking created successfully." });
// 	} catch (error) {
// 		console.error(error);
// 		return res
// 			.status(500)
// 			.json({ message: "An error occurred while creating the booking." });
// 	}
// });

var gapi = require("gapi");
const publishTheCalenderEvent = (event) => {
	try {
		gapi.client.load("calendar", "v3", () => {
			var request = gapi.client.calendar.events.insert({
				calendarId: "primary",
				resource: event,
			});

			request.execute(function (event) {
				console.log("Event created: " + event.htmlLink);
			});
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { publishTheCalenderEvent };

/* ----------------------- 


bookingRouter.post("/", authorization, async (req, res) => {
	try {
		const { userId, roomId, date, startTime, endTime } = req.body;

		// Check room availability
		const existingBooking = await BookingModel.findOne({
			roomId,
			date,
			startTime: { $lt: endTime },
			endTime: { $gt: startTime },
		});

		if (existingBooking) {
			return res
				.status(409)
				.json({ message: "Room is not available at the requested time." });
		}

		const booking = new BookingModel({
			roomId,
			date,
			startTime,
			endTime,
			userId,
		});

		await booking.save();

		return res.status(201).json({ message: "Booking created successfully." });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "An error occurred while creating the booking." });
	}
});

 ----------------------- */
