const fetch = require("node-fetch");
module.exports = function(app) {
	app.get("/api/event/:eventId", findEventById);
	app.get("/api/event", findEventsForSeason);
	app.get("/api/event/:eventId/round", findRoundsForEvent);

	function findEventById(req, res) {
		return fetch("http://api.snooker.org/?e=" + req.params.eventId)
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findEventsForSeason(req, res) {
		return fetch(
			"http://api.snooker.org/?t=5&s=" + req.query.year ||
				new Date().getFullYear()
		)
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findRoundsForEvent(req, res) {
		return fetch("http://api.snooker.org/?t=12&e=" + req.params.eventId)
			.then(response => response.json())
			.then(json => res.json(json));
	}
};
