import { EVENT_PLAYERS_URL, PLAYER_URL, RANKINGS_URL } from "../constants/urls";
import { Player } from "../models/player.model.client";
import { Ranking } from "../models/ranking.model.client";

export class PlayerServiceClient {
	players: Promise<Player[]>;
	rankings: Promise<Ranking[]>;
	constructor() {
		this.players = fetch(PLAYER_URL).then(response => response.json());
		this.rankings = fetch(RANKINGS_URL).then(response => response.json());
	}
	findAllPlayers() {
		return this.players;
	}

	findPlayerById(playerId: number) {
		return fetch(PLAYER_URL + playerId).then(response => response.json());
	}

	findRankings() {
		return this.rankings;
	}

	findPlayersInEvent(eventId: number) {
		return fetch(
			EVENT_PLAYERS_URL.replace(":eventId", String(eventId))
		).then(response => response.json());
	}
}
