import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../models/user.model.client";

@Component({
	selector: "app-profile",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
	constructor(private service: UserServiceClient, private router: Router) {}

	user: User = new User();
	update() {
		this.service.updateUser(this.user).then(() => location.reload());
	}

	refetch() {
		return this.service.profile().then(user => (this.user = user));
	}

	delete(): void {
		this.service
			.deleteCurrentUser()
			.then(() => this.router.navigate(["login"]));
	}

	ngOnInit() {
		this.refetch().catch(() => this.router.navigate(["login"]));
	}
}
