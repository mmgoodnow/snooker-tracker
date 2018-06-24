const mongoose = require("mongoose");
const sectionSchema = require("./section.schema.server");
const sectionModel = mongoose.model("SectionModel", sectionSchema);

function createSection(section) {
	return sectionModel.create(section);
}

function findSectionsForCourse(courseId) {
	return sectionModel.find({ courseId: courseId });
}

function findSectionById(sectionId) {
	return sectionModel.findById(sectionId);
}

function decrementSectionSeats(sectionId) {
	return sectionModel.update(
		{
			_id: sectionId,
		},
		{
			$inc: { seats: -1 },
		}
	);
}

function deleteSectionById(sectionId) {
	return sectionModel.findByIdAndRemove(sectionId);
}

function incrementSectionSeats(sectionId) {
	return sectionModel.update(
		{
			_id: sectionId,
		},
		{
			$inc: { seats: +1 },
		}
	);
}

function updateSectionById(sectionId, section) {
	return sectionModel.findByIdAndUpdate(
		{ _id: sectionId },
		{
			$set: {
				name: section.name,
				seats: section.seats,
				courseId: section.courseId,
			},
		},
		{ new: true }
	);
}

module.exports = {
	createSection: createSection,
	findSectionsForCourse: findSectionsForCourse,
	decrementSectionSeats: decrementSectionSeats,
	incrementSectionSeats: incrementSectionSeats,
	findSectionById: findSectionById,
	updateSectionById: updateSectionById,
	deleteSectionById: deleteSectionById,
};
