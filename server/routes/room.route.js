const express = require("express");
const RoomModel = require("../models/room.model"); 

const roomRouter = express.Router();

roomRouter.post("/add", async (req, res) => {
	const { name, capacity, amenities } = req.body;

	try {
		const existRoom = await RoomModel.findOne({ name: name });

		if (existRoom) {
			return res
				.status(409)
				.json({ message: "Room already exists with the same name." });
		}

		const newRoom = new RoomModel({
			name,
			capacity,
			amenities,
		});

		await newRoom.save();

		return res
			.status(201)
			.json({ message: "Room added successfully.", room: newRoom });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Error adding room.", error: error.message });
	}
});


roomRouter.get("/list", async (req, res) => {
	try {
		const data = await RoomModel.find();
		return res.status(200).json( data );
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Error fetching rooms.", error: error.message });
	}
});

module.exports = {roomRouter};
