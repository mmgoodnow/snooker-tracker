import { Component, OnInit } from "@angular/core";
import { PlayerServiceClient } from "../services/player.service.client";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Player } from "../models/player.model.client";
import { SubscriptionServiceClient } from "../services/subscription.service.client";
import { MatchServiceClient } from "../services/match.service.client";
import { Match } from "../models/match.model.client";

@Component({
	selector: "app-player-viewer",
	templateUrl: "./player-viewer.component.html",
	styleUrls: ["./player-viewer.component.css"],
})
export class PlayerViewerComponent implements OnInit {
	constructor(
		private service: PlayerServiceClient,
		private subscriptionService: SubscriptionServiceClient,
		private matchService: MatchServiceClient,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.checkIfSubscribed = this.checkIfSubscribed.bind(this);
		this.loadPlayer = this.loadPlayer.bind(this);
		this.route.params.subscribe(params => this.loadPlayer(params.playerId));
	}

	player: Player;
	isSubscribed: boolean = false;
	matches: Match[];

	loadPlayer(id) {
		this.service
			.findPlayerById(id)
			.then(player => (this.player = player))
			.then(this.checkIfSubscribed);
		this.loadMatches(id);
	}

	subscribe() {
		this.subscriptionService
			.subscribe(this.player.ID)
			.then(this.checkIfSubscribed, () => {
				this.router.navigate(["login"]);
			});
	}

	unsubscribe() {
		this.subscriptionService
			.unsubscribe(this.player.ID)
			.then(this.checkIfSubscribed);
	}

	checkIfSubscribed(): void {
		this.subscriptionService
			.isSubscribed(this.player.ID)
			.then(isSubscribed => (this.isSubscribed = isSubscribed));
	}

	loadMatches(id: number) {
		this.matchService
			.findMatchesForPlayerInSeason(id)
			.then(matches => (this.matches = matches))
			.then(() => console.log(this.matches));
	}

	ngOnInit() {}
}
