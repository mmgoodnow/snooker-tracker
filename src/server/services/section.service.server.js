module.exports = function(app) {
	app.post("/api/course/:courseId/section", createSection);
	app.get("/api/course/:courseId/section", findSectionsForCourse);
	app.get("/api/section/:sectionId", findSectionById);
	app.put("/api/section/:sectionId", updateSectionById);
	app.delete("/api/section/:sectionId", deleteSectionById);

	const sectionModel = require("../models/section/section.model.server");

	function findSectionById(req, res) {
		const sectionId = req.params.sectionId;
		sectionModel.findSectionById(sectionId).then(function(section) {
			res.json(section);
		});
	}

	function updateSectionById(req, res) {
		let sectionId = req.params.sectionId;
		let newSection = req.body;
		sectionModel
			.updateSectionById(sectionId, newSection)
			.then(function(newSection) {
				res.json(newSection);
			});
	}

	function deleteSectionById(req, res) {
		sectionModel
			.deleteSectionById(req.params.sectionId)
			.then(() => res.sendStatus(200));
	}

	function findSectionsForCourse(req, res) {
		const courseId = req.params["courseId"];
		sectionModel.findSectionsForCourse(courseId).then(function(sections) {
			res.json(sections);
		});
	}

	function createSection(req, res) {
		const section = req.body;
		sectionModel.createSection(section).then(function(section) {
			res.json(section);
		});
	}
};
