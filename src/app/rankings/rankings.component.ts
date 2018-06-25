import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-rankings",
	templateUrl: "./rankings.component.html",
	styleUrls: ["./rankings.component.css"],
})
export class RankingsComponent implements OnInit {
	constructor() {}

	players;

	retrieveResults() {
		return fetch("http://api.snooker.org/?t=10&st=player&s=2018").then(
			response => response.json()
		);
	}

	ngOnInit() {
		this.retrieveResults().then(json => (this.players = json));
	}
}
