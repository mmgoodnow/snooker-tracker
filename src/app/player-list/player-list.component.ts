import { Component, Input, OnInit } from "@angular/core";
import { Player } from "../models/player.model.client";

@Component({
	selector: "app-player-list",
	templateUrl: "./player-list.component.html",
	styleUrls: ["./player-list.component.css"],
})
export class PlayerListComponent implements OnInit {
	constructor() {}

	@Input() players: Player[];

	ngOnInit() {}
}
