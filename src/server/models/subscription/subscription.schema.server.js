const mongoose = require("mongoose");
module.exports = mongoose.Schema(
	{
		playerId: Number,
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "UserModel",
		},
	},
	{ collection: "subscription" }
);
