import { SUBSCRIPTION_URL } from "../constants/urls";

export default class SubscriptionServiceClient {
	subscribe(playerId: number) {
		return fetch(SUBSCRIPTION_URL + playerId, {
			credentials: "include",
			method: "post",
		});
	}

	unsubscribe(playerId: number) {
		return fetch(SUBSCRIPTION_URL + playerId, {
			credentials: "include",
			method: "delete",
		});
	}

	findSubscriptions() {
		return fetch(SUBSCRIPTION_URL, {
			credentials: "include",
		}).then(response => response.json());
	}

	isSubscribed(playerId: number) {
		return fetch(SUBSCRIPTION_URL + playerId, {
			credentials: "include",
		}).then(response => response.json());
	}
}