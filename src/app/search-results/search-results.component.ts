import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-search-results",
	templateUrl: "./search-results.component.html",
	styleUrls: ["./search-results.component.css"],
})
export class SearchResultsComponent implements OnInit {
	constructor(private router: Router) {}

	players;

	retrieveResults() {
		return fetch("http://api.snooker.org/?t=10&st=p&s=2018").then(
			response => response.json()
		);
	}

	ngOnInit() {
		this.retrieveResults().then(json => (this.players = json));
	}
}
