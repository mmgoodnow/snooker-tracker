const fetch = require("node-fetch");
module.exports = function(app) {
	app.get("/api/event/:eventId/round/:roundId/match/:matchId", findMatchById);
	app.get("/api/event/:eventId/match", findMatchesInEvent);
	app.get("/api/event/:eventId/round/:roundId/match", findMatchesInRound);
	app.get("/api/match/live", ongoingMatches);
	app.get("/api/player/:playerId/match", findMatchesForPlayerInSeason);

	function findMatchById(req, res) {
		return fetch(
			`http://api.snooker.org/?e=${req.params.eventId}&r=${
				req.params.roundId
			}&n=${req.params.matchId}`
		)
			.then(response => response.json())
			.then(json => res.json(json[0]));
	}

	function findMatchesInEvent(req, res) {
		return fetch("http://api.snooker.org/?t=6&e=" + req.params.eventId)
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findMatchesInRound(req, res) {
		return fetch("http://api.snooker.org/?t=6&e=" + req.params.eventId)
			.then(response => response.json())
			.then(matches =>
				matches.filter(m => m.Round === Number(req.params.roundId))
			)
			.then(json => res.json(json));
	}

	function ongoingMatches(req, res) {
		return fetch("http://api.snooker.org/?t=7")
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findMatchesForPlayerInSeason(req, res) {
		return fetch(
			`http://api.snooker.org/?t=8&p=${req.params.playerId}&s=${req.query
				.year || new Date().getFullYear()}`
		)
			.then(response => response.json())
			.then(json => res.json(json));
	}
};
