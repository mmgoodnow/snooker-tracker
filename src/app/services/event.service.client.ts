import {
	EVENT_PLAYERS_URL,
	EVENT_ROUNDS_URL,
	EVENT_URL,
	RANKINGS_URL,
} from "../constants/urls";
import { Event } from "../models/event.model.client";

export class EventServiceClient {
	events: Promise<Event[]>;
	constructor() {
		this.events = fetch(EVENT_URL).then(response => response.json());
	}
	findAllEventsForCurrentSeason() {
		return this.events;
	}

	findAllEventsForSeason(year: string) {
		return fetch(EVENT_URL + "?year=" + year).then(response =>
			response.json()
		);
	}

	findEventById(eventId: number) {
		return fetch(EVENT_URL + String(eventId)).then(response =>
			response.json()
		);
	}

	findRoundsForEvent(eventId: number) {
		return fetch(
			EVENT_ROUNDS_URL.replace(":eventId", String(eventId))
		).then(response => response.json());
	}
}
