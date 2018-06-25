import { PLAYER_URL, RANKINGS_URL } from "../constants/urls";
import { Player } from "../models/player.model.client";

export class PlayerServiceClient {
	findAllPlayers() {
		return fetch(PLAYER_URL).then(response => response.json());
	}

	findPlayerById(playerId: number) {
		return fetch(PLAYER_URL + playerId).then(response => response.json());
	}

	findRankings() {
		return fetch(RANKINGS_URL).then(response => response.json());
	}
}
