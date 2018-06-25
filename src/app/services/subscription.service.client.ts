import { SUBSCRIPTION_URL } from "../constants/urls";

export class SubscriptionServiceClient {
	subscribe(playerId: number) {
		return fetch(SUBSCRIPTION_URL + playerId, {
			credentials: "include",
			method: "post",
		})
			.then(response => response.json())
			.catch(Promise.reject);
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
