import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { User } from "../models/user.model.client";
import { Router } from "@angular/router";

@Component({
	selector: "app-admin",
	templateUrl: "./admin.component.html",
	styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
	constructor(
		private userService: UserServiceClient,
		private router: Router
	) {}

	username: string;

	ngOnInit() {
		this.userService
			.profile()
			.then((user: User) => {
				if (user["username"] === "admin") {
					this.username = user.username;
				} else {
					return Promise.reject(new Error("not admin"));
				}
			})
			.then(null, () => {
				alert("You must be admin to access this page.");
				this.router.navigate(["login"]);
			});
	}
}
