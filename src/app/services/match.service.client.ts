import {
	EVENT_MATCH_URL,
	MATCH_LIVE_URL,
	MATCH_URL,
	PLAYER_MATCH_URL,
} from "../constants/urls";

export class MatchServiceClient {
	constructor() {}

	findAllMatchesInEvent(eventId: number) {
		return fetch(EVENT_MATCH_URL.replace(":eventId", String(eventId))).then(
			response => response.json()
		);
	}

	findAllMatchesInRound(eventId: number, roundId: number) {
		return fetch(
			MATCH_URL.replace(":eventId", String(eventId)).replace(
				":roundId",
				String(roundId)
			)
		).then(response => response.json());
	}

	findMatchById(eventId: number, roundId: number, matchId: number) {
		return fetch(
			MATCH_URL.replace(":eventId", String(eventId)).replace(
				":roundId",
				String(roundId)
			) + matchId
		).then(response => response.json());
	}

	findMatchesForPlayerInSeason(playerId: number) {
		return fetch(
			PLAYER_MATCH_URL.replace(":playerId", String(playerId))
		).then(response => response.json());
	}

	findOngoingMatches() {
		return fetch(MATCH_LIVE_URL).then(response => response.json());
	}
}
