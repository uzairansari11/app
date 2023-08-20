const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
	name: { type: String, required: true },
	capacity: { type: Number, required: true },
	amenities: [String],
	status: { type: Boolean, default: true },
});

const RoomModel = mongoose.model("Room", roomSchema);

module.exports = RoomModel;
