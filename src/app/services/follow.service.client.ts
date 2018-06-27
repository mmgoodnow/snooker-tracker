import { FOLLOW_URL, FOLLOWERS_URL, FOLLOWING_URL } from "../constants/urls";

export class FollowServiceClient {
	findFollowing(userId) {
		return fetch(FOLLOWING_URL.replace(":userId", userId)).then(response =>
			response.json()
		);
	}

	findFollowers(userId) {
		return fetch(FOLLOWERS_URL.replace(":userId", userId)).then(response =>
			response.json()
		);
	}

	follow(userId) {
		return fetch(FOLLOW_URL.replace(":userId", userId), {
			method: "post",
			credentials: "include",
		});
	}

	unfollow(userId) {
		return fetch(FOLLOW_URL.replace(":userId", userId), {
			method: "delete",
			credentials: "include",
		});
	}

	isFollowing(userId) {
		return fetch(FOLLOW_URL.replace(":userId", userId)).then(response =>
			response.json()
		);
	}
}
