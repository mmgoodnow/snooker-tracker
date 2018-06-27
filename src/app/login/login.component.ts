import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserServiceClient } from "../services/user.service.client";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	username: string = "";
	password: string = "";
	constructor(private router: Router, private service: UserServiceClient) {}

	login() {
		this.service
			.login(this.username, this.password)
			.then(response => response.json())
			.then(user => {
				if (user) {
					location.assign("home");
				} else {
					this.password = "";
					alert("Invalid credentials. Try again.");
				}
			});
	}

	ngOnInit() {
		this.service.profile().then(() => this.router.navigate(["profile"]));
	}
}
