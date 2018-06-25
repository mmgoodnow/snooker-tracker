module.exports = function(app) {
	const subscriptionModel = require("../models/subscription/subscription.model.server");
	app.get("/api/subscription", findSubscriptions);
	app.post("/api/subscription/:playerId", subscribe);
	app.delete("/api/subscription/:playerId", unsubscribe);
	app.get("/api/subscription/:playerId", isSubscribed);

	function findSubscriptions(req, res) {
		let userId;
		if (req.params.userId) {
			userId = req.params.userId;
		} else if (req.session.currentUser) {
			userId = req.session.currentUser._id;
		} else {
			return res.status(400).send("You must be logged in.");
		}
		subscriptionModel
			.findSubscriptions(userId)
			.then(function(subscriptions) {
				res.json(subscriptions);
			});
	}

	function isSubscribed(req, res) {
		let userId;
		if (req.params.userId) {
			userId = req.params.userId;
		} else if (req.session.currentUser) {
			userId = req.session.currentUser._id;
		} else {
			return res.send(false);
		}
		subscriptionModel
			.findSubscriptions(userId)
			.then(function(subscriptions) {
				res.send(
					subscriptions.filter(
						sub => sub.playerId == req.params.playerId
					).length > 0
				);
			});
	}

	function subscribe(req, res) {
		const subscription = {
			user: req.params.userId || req.session.currentUser._id,
			playerId: req.params.playerId,
		};
		if (!subscription.user) {
			res.status(400).send("You must be logged in.");
			return;
		}
		subscriptionModel.subscribe(subscription).then(function(sub) {
			res.json(sub);
		});
	}

	function unsubscribe(req, res) {
		const subscription = {
			user: req.params.userId || req.session.currentUser._id,
			playerId: req.params.playerId,
		};
		if (!subscription.user) {
			res.status(400).send("You must be logged in.");
			return;
		}
		subscriptionModel.unsubscribe(subscription).then(function() {
			res.sendStatus(200);
		});
	}
};
