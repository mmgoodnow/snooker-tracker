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
	) {
		this.loadUsers = this.loadUsers.bind(this);
	}

	username: string;
	users: User[];
	newUser = new User();

	loadUsers() {
		this.userService
			.findAllUsers()
			.then(users => (this.users = users))
			.then(() => console.log(this.users));
	}

	deleteUser(id: string) {
		this.userService.deleteUser(id).then(this.loadUsers);
	}

	createUser() {
		this.userService.createUser(this.newUser).then(this.loadUsers);
	}

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
		this.loadUsers();
	}
}
