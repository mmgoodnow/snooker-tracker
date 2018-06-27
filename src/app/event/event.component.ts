import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventServiceClient } from "../services/event.service.client";
import { Event } from "../models/event.model.client";
import { Player } from "../models/player.model.client";
import { PlayerServiceClient } from "../services/player.service.client";
import { MatchServiceClient } from "../services/match.service.client";
import { Match } from "../models/match.model.client";
import { Round } from "../models/round.model.client";

@Component({
	selector: "app-event",
	templateUrl: "./event.component.html",
	styleUrls: ["./event.component.css"],
})
export class EventComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private eventService: EventServiceClient,
		private playerService: PlayerServiceClient,
		private matchService: MatchServiceClient
	) {
		this.setParams = this.setParams.bind(this);
		this.route.params.subscribe(this.setParams);
		this.loadMatches = this.loadMatches.bind(this);
	}

	eventId: number = 0;
	event: Event;
	players: Player[];
	matches: Match[][];
	rounds: Round[];

	setParams(params) {
		this.eventId = params.eventId;
		this.loadEvent();
	}

	loadEvent() {
		this.eventService
			.findEventById(this.eventId)
			.then(event => (this.event = event));
		this.playerService
			.findPlayersInEvent(this.eventId)
			.then(players => (this.players = players));
		this.eventService
			.findRoundsForEvent(this.eventId)
			.then(rounds => (this.rounds = rounds))
			.then(() => (this.matches = new Array(this.rounds.length)))
			.then(() => this.loadMatches());
	}

	loadMatches() {
		for (let r of this.rounds) {
			this.matchService
				.findAllMatchesInRound(this.eventId, r.Round)
				.then(matches => (this.matches[r.Round] = matches));
		}
	}

	ngOnInit() {}
}
