const bodyParser = require("body-parser");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", req.headers.origin);
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept"
		);
		res.header(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);

		res.header("Access-Control-Allow-Credentials", "true");
		next();
	});
	app.use(
		session({
			store: new mongoStore({ mongooseConnection: mongoose.connection }),
			resave: true,
			httpOnly: false,
			saveUninitialized: true,
			secret: "any string",
			cookie: {
				maxAge: 30 * 60000,
			},
		})
	);

	const userService = require("./services/user.service.server");
	const sectionService = require("./services/section.service.server");
	const enrollmentService = require("./services/enrollment.service.server");
	userService(app);
	sectionService(app);
	enrollmentService(app);
};
