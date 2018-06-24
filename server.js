const express = require("express");
const path = require("path");
const server = require("./src/server/server");
const app = express();

// back end
server(app);

// serve front end
app.use(express.static("./dist/webdev-final-project"));

app.get("/*", function(req, res) {
	res.sendFile(path.join(__dirname, "/dist/webdev-final-project/index.html"));
});

app.listen(process.env.PORT || 8080);
