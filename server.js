const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
	res.sendFile("./public/templates/index.html", { root: __dirname });
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
