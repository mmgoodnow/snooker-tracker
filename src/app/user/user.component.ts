import { Component, OnInit } from "@angular/core";
import { UserServiceClient } from "../services/user.service.client";
import { FollowServiceClient } from "../services/follow.service.client";
import { ActivatedRoute } from "@angular/router";
import { User } from "../models/user.model.client";

@Component({
	selector: "app-user",
	templateUrl: "./user.component.html",
	styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
	constructor(
		private userService: UserServiceClient,
		private followService: FollowServiceClient,
		private route: ActivatedRoute
	) {
		this.setParams = this.setParams.bind(this);
		this.route.params.subscribe(params => this.setParams(params));
	}

	userId: string;
	user: User;

	setParams(params) {
		this.userId = params.userId;
		this.loadUser();
	}

	loadUser() {
		this.userService
			.findUserById(this.userId)
			.then(user => (this.user = user));
	}

	ngOnInit() {}
}
