const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const assetsPath = path.join(__dirname, "public");

const PORT = 9000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The server is live at http://localhost:${PORT}`);
});
