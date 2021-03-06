import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerServiceClient } from "../services/player.service.client";
import { Player } from "../models/player.model.client";

@Component({
	selector: "app-search-results",
	templateUrl: "./search-results.component.html",
	styleUrls: ["./search-results.component.css"],
})
export class SearchResultsComponent implements OnInit {
	constructor(private router: Router, private service: PlayerServiceClient) {}

	players: Player[] = [];
	search: string = "";

	retrieveResults() {
		this.service.findAllPlayers().then(json => (this.players = json));
	}

	isRelevant(player: Player): boolean {
		for (const key of Object.keys(player)) {
			if (
				String(player[key])
					.toLowerCase()
					.includes(this.search.toLowerCase())
			)
				return true;
		}
		return false;
	}

	ngOnInit() {
		this.retrieveResults();
	}
}
