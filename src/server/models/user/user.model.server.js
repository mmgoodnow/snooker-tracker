var mongoose = require("mongoose");
var userSchema = require("./user.schema.server");
var userModel = mongoose.model("UserModel", userSchema);

function findUserByCredentials(credentials) {
	return userModel.findOne(credentials, { username: 1 }, {});
}

function findUserByUsername(username) {
	return userModel.findOne({ username: username }, { username: 1 });
}

function findUserById(userId) {
	return userModel.findById(userId);
}

function createUser(user) {
	return userModel.create(user);
}

function findAllUsers() {
	return userModel.find();
}

function updateUser(userId, user) {
	return userModel.findByIdAndUpdate(
		{ _id: userId },
		{
			$set: {
				username: user.username,
				password: user.password,
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
			},
		},
		{ new: true }
	);
}

function deleteUserById(userId) {
	return userModel.deleteOne({ _id: userId });
}

var api = {
	createUser: createUser,
	findAllUsers: findAllUsers,
	findUserById: findUserById,
	findUserByCredentials: findUserByCredentials,
	findUserByUsername: findUserByUsername,
	updateUser: updateUser,
	deleteUserById: deleteUserById,
};

module.exports = api;
