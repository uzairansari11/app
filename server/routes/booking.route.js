const express = require("express");
const { BookingModel } = require("../models/booking.model");
const { authorization } = require("../middlewares/jwt.middleware");
const { google } = require("googleapis");
const { oauth2 } = require("googleapis/build/src/apis/oauth2");
const bookingRouter = express.Router();

/* scheduling  the meeting route */
const date = "2023-08-21"; // Replace with your desired date
const startTime = "09:00"; // Replace with your desired start time (in UTC)
const endTime = "10:00"; // Replace with your desired end time (in UTC)
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

		const auth =
			"ya29.a0AfB_byDpRSyyac4R6UarKKGJEAuX1L-UlSBNv9pjoo26CWK7uD2RUsMdDlsJRSRCOoeGQSafxjpsYxcZ588B-z8JmJvpW18KMh9yhvN49KlBURjDH28WR5iz7YSPGAmKfi2mc7-dicWxHQm3w4PCIeDuzlDvEY3jk1OQuwaCgYKARcSARMSFQHsvYlsxqZglDYra7keBwykBgF7kg0173 accessToken 1//0gAr66Me0w9QDCgYIARAAGBASNwF-L9IrVHqD-O74o_fEQgLOIEIlSRgbKmaYEpUVPPuL3JSGFUFB96Phm2HwGtPUb-Aca7i82AA";

		const calendar = google.calendar("v3");

		const event = {
			summary: "Meeting",
			description: "Meeting description",
			start: {
				dateTime: `${date}T${startTime}:00Z`,
				timeZone: "UTC",
			},
			end: {
				dateTime: `${date}T${endTime}:00Z`,
				timeZone: "UTC",
			},
		};

		await calendar.events.insert({
			auth,
			calendarId: "primary",
			resource: event,
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
/* getting meeting the meeting route */

bookingRouter.get("/", authorization, async (req, res) => {
	try {
		const userId = req.body.userId;
		const bookedRooms = await BookingModel.find({ userId }).populate("roomId");
		return res.status(200).json(bookedRooms);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: error });
	}
});

/* cancel the meeting route */
bookingRouter.delete("/:bookingId", authorization, async (req, res) => {
	try {
		const userId = req.body.userId;
		const bookingId = req.params.bookingId;

		const booking = await BookingModel.findOne({
			_id: bookingId,
			userId: userId,
		});

		if (!booking) {
			return res
				.status(404)
				.json({ message: "Booking not found or unauthorized." });
		}

		await BookingModel.deleteOne({ _id: bookingId });

		return res.status(200).json({ message: "Booking cancelled successfully." });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "An error occurred while cancelling the booking." });
	}
});

module.exports = { bookingRouter };
