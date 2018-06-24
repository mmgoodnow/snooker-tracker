module.exports = function(app) {
	app.post("/api/section/:sectionId/enrollment", enroll);
	app.post("/api/student/:studentId/section/:sectionId", enroll);
	app.delete("/api/section/:sectionId/enrollment", disenroll);
	app.delete("/api/student/:studentId/section/:sectionId", disenroll);
	app.get("/api/profile/section", findSectionsForStudent);
	app.get("/api/student/:studentId/section", findSectionsForStudent);

	const enrollmentModel = require("../models/enrollment/enrollment.model.server");
	const sectionModel = require("../models/section/section.model.server");

	function findSectionsForStudent(req, res) {
		let studentId;
		if (req.params.studentId) {
			studentId = req.params.studentId;
		} else if (req.session.currentUser) {
			studentId = req.session.currentUser._id;
		} else {
			res.sendStatus(400);
			return;
		}
		enrollmentModel
			.findSectionsForStudent(studentId)
			.then(function(enrollments) {
				res.json(enrollments);
			});
	}

	function enroll(req, res) {
		const enrollment = {
			student: req.params.studentId || req.session.currentUser._id,
			section: req.params.sectionId,
		};
		sectionModel
			.decrementSectionSeats(req.params.sectionId)
			.then(function() {
				return enrollmentModel.enroll(enrollment);
			})
			.then(function(e) {
				res.json(e);
			});
	}

	function disenroll(req, res) {
		const enrollment = {
			student: req.params.studentId || req.session.currentUser._id,
			section: req.params.sectionId,
		};
		sectionModel
			.incrementSectionSeats(req.params.sectionId)
			.then(function() {
				return enrollmentModel.disenroll(enrollment);
			})
			.then(function() {
				res.sendStatus(200);
			});
	}
};
