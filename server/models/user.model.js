const mongoose = require("mongoose");

const useSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: "https://cdn.filestackcontent.com/RuEgtpvGSbidugrFz91z",
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		refreshToken: {
			type: String,
		},
	},
	{
		versionKey: false,
	}
);

const UserModel = mongoose.model("User", useSchema);
module.exports = { UserModel };
