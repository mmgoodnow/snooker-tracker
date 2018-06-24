import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserServiceClient } from "../services/user.service.client";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
	constructor(private router: Router, private service: UserServiceClient) {}

	username: string;
	password: string;
	password2: string;

	register() {
		if (this.username == "") {
			alert("Username cannot be empty");
			return;
		}
		if (this.password == "") {
			alert("Password cannot be empty");
			return;
		}
		if (this.password != this.password2) {
			alert("Passwords do not match");
			return;
		}
		this.service
			.register({
				username: this.username,
				password: this.password,
			})
			.then(response => {
				if (response.ok) return this.router.navigate(["profile"]);
				else response.text().then(alert);
			});
	}

	ngOnInit() {}
}
