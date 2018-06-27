import {
	LOGIN_URL,
	LOGOUT_URL,
	PROFILE_URL,
	USER_URL,
	REGISTER_URL,
} from "../constants/urls";
import { User } from "../models/user.model.client";

export class UserServiceClient {
	findAllUsers() {
		return fetch(USER_URL).then(response => response.json());
	}
	findUserById(userId: string) {
		return fetch(USER_URL + userId).then(response => response.json());
	}

	login(username, password) {
		return fetch(LOGIN_URL, {
			method: "post",
			body: JSON.stringify({ username, password }),
			credentials: "include",
			headers: {
				"content-type": "application/json",
			},
		});
	}

	logout() {
		return fetch(LOGOUT_URL, {
			method: "post",
			credentials: "include",
		});
	}

	profile() {
		return fetch(PROFILE_URL, {
			credentials: "include", // include, same-origin, *omit
		}).then(response => response.json());
	}

	register(user) {
		return fetch(REGISTER_URL, {
			method: "post",
			body: JSON.stringify(user),
			credentials: "include", // include, same-origin, *omit
			headers: {
				"content-type": "application/json",
			},
		});
	}

	updateUser(user: User) {
		return fetch(PROFILE_URL, {
			method: "put",
			body: JSON.stringify(user),
			credentials: "include", // include, same-origin, *omit
			headers: {
				"content-type": "application/json",
			},
		});
	}

	deleteCurrentUser() {
		return fetch(PROFILE_URL, {
			method: "delete",
			credentials: "include", // include, same-origin, *omit
			headers: {
				"content-type": "application/json",
			},
		});
	}

	createUser(user: User) {
		return fetch(USER_URL, {
			method: "post",
			body: JSON.stringify(user),
			credentials: "include", // include, same-origin, *omit
			headers: {
				"content-type": "application/json",
			},
		});
	}

	deleteUser(id: string) {
		return fetch(USER_URL + id, {
			method: "delete",
		});
	}
}
