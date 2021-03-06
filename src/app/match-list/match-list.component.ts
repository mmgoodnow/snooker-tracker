import { Component, Input, OnInit } from "@angular/core";
import { Match } from "../models/match.model.client";
import { PlayerServiceClient } from "../services/player.service.client";

@Component({
	selector: "app-match-list",
	templateUrl: "./match-list.component.html",
	styleUrls: ["./match-list.component.css"],
})
export class MatchListComponent implements OnInit {
	constructor(private playerService: PlayerServiceClient) {
		this.populateNames = this.populateNames.bind(this);
	}

	_matches: Match[] = [];

	@Input()
	set matches(matches: Match[]) {
		if (!matches) return;
		matches.forEach(match => this.populateNames(match));
		this._matches = matches;
	}

	populateNames(match: Match) {
		this.playerService
			.findAllPlayers()
			.then(results => results.filter(p => p.ID == match.Player1ID)[0])
			.then(p => (match.Player1 = p))
			.then(() => console.log(match));
		this.playerService
			.findAllPlayers()
			.then(results => results.filter(p => p.ID == match.Player2ID)[0])
			.then(p => (match.Player2 = p))
			.then(() => console.log(match));
	}

	ngOnInit() {}
}
