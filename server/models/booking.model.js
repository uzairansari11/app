const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
	date: { type: String, required: true },
	startTime: { type: String, required: true },
	endTime: { type: String, required: true },
});

const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = { BookingModel };
