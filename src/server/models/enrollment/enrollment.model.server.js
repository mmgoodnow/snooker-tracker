var mongoose = require("mongoose");
var enrollmentSchema = require("./enrollment.schema.server");
var enrollmentModel = mongoose.model("EnrollmentModel", enrollmentSchema);

function enroll(enrollment) {
	return enrollmentModel.create(enrollment);
}

function disenroll(enrollment) {
	return enrollmentModel.remove(enrollment);
}

function findSectionsForStudent(studentId) {
	return enrollmentModel
		.find({ student: studentId })
		.populate("section")
		.exec();
}

module.exports = {
	enroll: enroll,
	disenroll: disenroll,
	findSectionsForStudent: findSectionsForStudent,
};
