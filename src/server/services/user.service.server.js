module.exports = function(app) {
	app.get("/api/user", findAllUsers);
	app.post("/api/user", createUser);
	app.get("/api/user/:userId", findUserById);
	app.delete("/api/user/:userId", deleteUser);

	app.get("/api/profile", profile);
	app.put("/api/profile", updateUser);
	app.delete("/api/profile", deleteCurrentUser);
	app.post("/api/register", register);
	app.post("/api/login", login);
	app.post("/api/logout", logout);

	const userModel = require("../models/user/user.model.server");

	function login(req, res) {
		const credentials = req.body;
		userModel.findUserByCredentials(credentials).then(function(user) {
			req.session["currentUser"] = user;
			res.json(user);
		});
	}

	function logout(req, res) {
		req.session.destroy();
		res.sendStatus(200);
	}

	function findUserById(req, res) {
		const id = req.params["userId"];
		userModel.findUserById(id).then(function(user) {
			res.json(user);
		});
	}

	function profile(req, res) {
		const user = req.session["currentUser"];
		if (!user) {
			res.sendStatus(400);
		} else {
			userModel.findUserById(user._id).then(function(newUser) {
				res.json(newUser);
			});
		}
	}

	function register(req, res) {
		const user = req.body;
		userModel.findUserByUsername(user.username).then(function(exists) {
			if (exists) {
				res.status(400).send("Username Taken");
			} else {
				userModel.createUser(user).then(function(newUser) {
					req.session["currentUser"] = newUser;
					res.json(newUser);
				});
			}
		});
	}

	function createUser(req, res) {
		const user = req.body;
		userModel.findUserByUsername(user.username).then(function(exists) {
			if (exists) {
				res.status(400).send("Username Taken");
			} else {
				userModel.createUser(user).then(function(newUser) {
					res.json(newUser);
				});
			}
		});
	}

	function findAllUsers(req, res) {
		userModel.findAllUsers().then(function(users) {
			res.json(users);
		});
	}

	function deleteUser(req, res) {
		userModel
			.deleteUserById(req.params.userId)
			.then(res.send(req.params.userId));
	}

	function deleteCurrentUser(req, res) {
		userModel
			.deleteUserById(req.session.currentUser._id)
			.then(logout(req, res));
	}

	function updateUser(req, res) {
		const user = req.session["currentUser"];
		const newUser = req.body;
		userModel.updateUser(user._id, newUser).then(function(newUser) {
			req.session["currentUser"] = newUser;
			res.json(newUser);
		});
	}
};
