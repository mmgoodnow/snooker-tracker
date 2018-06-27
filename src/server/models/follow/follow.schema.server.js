const mongoose = require("mongoose");
module.exports = mongoose.Schema(
	{
		follower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "UserModel",
		},
		followee: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "UserModel",
		},
	},
	{ collection: "follow" }
);
