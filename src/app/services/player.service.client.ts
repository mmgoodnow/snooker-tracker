import { PLAYER_URL, RANKINGS_URL } from "../constants/urls";
import { Player } from "../models/player.model.client";

export class PlayerServiceClient {
	players: Promise<Player[]>;
	constructor() {
		this.players = fetch(PLAYER_URL).then(response => response.json());
	}
	findAllPlayers() {
		return this.players;
	}

	findPlayerById(playerId: number) {
		return fetch(PLAYER_URL + playerId).then(response => response.json());
	}

	findRankings() {
		return fetch(RANKINGS_URL).then(response => response.json());
	}
}