import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { SubscriptionServiceClient } from "../services/subscription.service.client";
import { Player } from "../models/player.model.client";
import { User } from "../models/user.model.client";
import { PlayerServiceClient } from "../services/player.service.client";

@Component({
	selector: "app-favorite-players",
	templateUrl: "./favorite-players.component.html",
	styleUrls: ["./favorite-players.component.css"],
})
export class FavoritePlayersComponent implements OnInit {
	constructor(
		private userService: UserServiceClient,
		private subscriptionService: SubscriptionServiceClient,
		private playerService: PlayerServiceClient
	) {}

	players: Player[] = [];
	user: User;

	ngOnInit() {
		this.subscriptionService
			.findSubscriptions()
			.then(subscriptions =>
				subscriptions.map(sub =>
					this.playerService
						.findPlayerById(sub.playerId)
						.then(player => this.players.push(player))
				)
			);
	}
}
