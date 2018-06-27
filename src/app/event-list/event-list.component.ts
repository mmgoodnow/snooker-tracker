import { Component, OnInit } from "@angular/core";
import { EventServiceClient } from "../services/event.service.client";
import { Event } from "../models/event.model.client";

@Component({
	selector: "app-event-list",
	templateUrl: "./event-list.component.html",
	styleUrls: ["./event-list.component.css"],
})
export class EventListComponent implements OnInit {
	constructor(private service: EventServiceClient) {}

	events: Event[];

	ngOnInit() {
		this.service
			.findAllEventsForCurrentSeason()
			.then(events => (this.events = events));
	}
}
