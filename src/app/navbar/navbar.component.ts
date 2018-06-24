import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
	constructor(private service: UserServiceClient) {}

	username: string;

	ngOnInit() {
		this.service.profile().then(user => (this.username = user.username));
	}
}
