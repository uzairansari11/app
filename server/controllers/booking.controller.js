const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.model");
const Room = require("../models/room.model");
const User = require("../models/user.model");

// Create a new booking
router.post("/book", async (req, res) => {
	try {
		const { userId, roomId, startTime, endTime } = req.body;

		const currentTime = new Date();
		const oneDayAhead = new Date(currentTime);
		oneDayAhead.setDate(currentTime.getDate() + 1);

		// Check if the booking is within the allowed range
		if (
			startTime < oneDayAhead ||
			startTime > new Date(currentTime.getTime() + 15 * 24 * 60 * 60 * 1000)
		) {
			return res.status(400).json({ message: "Invalid booking time." });
		}

		// Check if the room is available during the requested time
		const isRoomAvailable = await checkRoomAvailability(
			roomId,
			startTime,
			endTime
		);
		if (!isRoomAvailable) {
			return res
				.status(400)
				.json({ message: "Room is not available at the requested time." });
		}

		const booking = new Booking({
			user: userId,
			room: roomId,
			startTime,
			endTime,
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

async function checkRoomAvailability(roomId, startTime, endTime) {
	const existingBookings = await Booking.find({
		room: roomId,
		startTime: { $lt: endTime },
		endTime: { $gt: startTime },
	});

	return existingBookings.length === 0;
}

module.exports = router;
