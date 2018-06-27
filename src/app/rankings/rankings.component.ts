import { Component, OnInit } from "@angular/core";
import { PlayerServiceClient } from "../services/player.service.client";

@Component({
	selector: "app-rankings",
	templateUrl: "./rankings.component.html",
	styleUrls: ["./rankings.component.css"],
})
export class RankingsComponent implements OnInit {
	constructor(private service: PlayerServiceClient) {
		this.populateName = this.populateName.bind(this);
	}

	rankings;

	retrieveResults() {
		return this.service
			.findRankings()
			.then(json => (this.rankings = json))
			.then(() => this.rankings.map(this.populateName));
	}

	populateName(r) {
		this.service
			.findAllPlayers()
			.then(results => results.filter(p => p.ID == r.PlayerID)[0])
			.then(p => {
				r.FirstName = p.FirstName;
				r.LastName = p.LastName;
			});
	}

	ngOnInit() {
		this.retrieveResults();
	}
}
