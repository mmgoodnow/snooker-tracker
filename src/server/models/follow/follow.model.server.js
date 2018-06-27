const mongoose = require("mongoose");
const followSchema = require("./follow.schema.server");
const followModel = mongoose.model("FollowModel", followSchema);

function follow(sub) {
	return followModel.create(sub);
}

function unfollow(sub) {
	return followModel.remove(sub);
}

function findFollowing(follower) {
	return followModel.find({ follower: follower });
}

function findFollowers(followee) {
	return followModel.find({ followee: followee });
}

function isFollowing(sub) {
	return followModel.findOne(sub);
}

module.exports = {
	follow: follow,
	unfollow: unfollow,
	findFollowing: findFollowing,
	findFollowers: findFollowers,
	isFollowing: isFollowing,
};
