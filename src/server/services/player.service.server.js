const fetch = require("node-fetch");
module.exports = function(app) {
	app.get("/api/player/:playerId", findPlayerById);
	app.get("/api/player", findAllPlayers);
	app.get("/api/rankings", findRankings);
	app.get("/api/event/:eventId/player", findAllPlayersInEvent);

	function findAllPlayers(req, res) {
		fetch(
			`http://api.snooker.org/?t=10&st=player&s=${req.query.year ||
				new Date().getFullYear()}`
		)
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findPlayerById(req, res) {
		fetch("http://api.snooker.org/?player=" + req.params.playerId)
			.then(response => response.json())
			.then(json => res.json(json[0]));
	}

	function findRankings(req, res) {
		fetch(
			`http://api.snooker.org/?rt=MoneyRankings&s=${req.query.year ||
				new Date().getFullYear()}`
		)
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findAllPlayersInEvent(req, res) {
		fetch("http://api.snooker.org/?t=9&e=" + req.params.eventId)
			.then(response => response.json())
			.then(json => res.json(json));
	}
};
