module.exports = function(app) {
	const followModel = require("../models/follow/follow.model.server");
	app.get("/api/user/:userId/following", findFollowing);
	app.get("/api/user/:userId/followers", findFollowers);
	app.post("/api/user/:userId/follow", follow);
	app.delete("/api/user/:userId/follow", unfollow);
	app.get("/api/user/:userId/follow", isFollowing);

	function isFollowing(req, res) {
		let follower;
		if (req.session.currentUser) {
			follower = req.session.currentUser._id;
		} else {
			return res.send(false);
		}
		const sub = {
			follower: follower,
			followee: req.params.userId,
		};
		followModel.isFollowing(sub).then(doc => res.json(!!doc));
	}

	function findFollowing(req, res) {
		followModel.findFollowing(req.params.userId).then(doc => res.json(doc));
	}

	function findFollowers(req, res) {
		followModel.findFollowers(req.params.userId).then(doc => res.json(doc));
	}

	function follow(req, res) {
		let follower;
		if (req.session.currentUser) {
			follower = req.session.currentUser._id;
		} else {
			return res.status(400).send("You must be logged in.");
		}
		const payload = {
			follower: follower,
			followee: req.params.userId,
		};
		followModel.follow(payload).then(function(sub) {
			res.json(sub);
		});
	}

	function unfollow(req, res) {
		let follower;
		if (req.session.currentUser) {
			follower = req.session.currentUser._id;
		} else {
			return res.status(400).send("You must be logged in.");
		}
		const subscription = {
			follower: follower,
			followee: req.params.userId,
		};
		followModel.unfollow(subscription).then(function() {
			res.sendStatus(200);
		});
	}
};
