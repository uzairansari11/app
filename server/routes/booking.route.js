const express = require("express");
const { BookingModel } = require("../models/booking.model");
const { authorization } = require("../middlewares/jwt.middleware");
const bookingRouter = express.Router();

/* scheduling  the meeting route */

bookingRouter.post("/", authorization, async (req, res) => {
	console.log("req booking", req.body.userId);
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
/* getting meeting the meeting route */

bookingRouter.get("/", authorization, async (req, res) => {
	try {
		const userId = req.body.userId;
		const bookedRooms = await BookingModel.find({ userId })
			.populate("roomId")
			.exec();

		return res.status(200).json(bookedRooms);
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "An error occurred while fetching booked rooms." });
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
