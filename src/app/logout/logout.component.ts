import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { Router } from "@angular/router";

@Component({
	selector: "app-logout",
	templateUrl: "./logout.component.html",
	styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
	constructor(private service: UserServiceClient, private router: Router) {}

	ngOnInit() {
		this.service.logout().then(() => location.assign("login"));
	}
}
