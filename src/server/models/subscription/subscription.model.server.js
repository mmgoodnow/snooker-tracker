const mongoose = require("mongoose");
const subscriptionSchema = require("./subscription.schema.server");
const subscriptionModel = mongoose.model(
	"SubscriptionModel",
	subscriptionSchema
);

function subscribe(sub) {
	return subscriptionModel.create(sub);
}

function unsubscribe(sub) {
	return subscriptionModel.remove(sub);
}

function findSubscriptions(userId) {
	return subscriptionModel.find({ user: userId });
}

module.exports = {
	subscribe: subscribe,
	unsubscribe: unsubscribe,
	findSubscriptions: findSubscriptions,
};
