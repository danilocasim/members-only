const express = require("express");
const session = require("express-session");
const pool = require("./db/pool");
const passport = require("passport");

const pgSession = require("connect-pg-simple")(session);

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const path = require("path");
const assetsPath = path.join(__dirname, "public");

const PORT = 9000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("./configs/passport");

const sessionStore = new pgSession({ pool: pool });

app.use(
  session({
    store: sessionStore,
    secret: "cats",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use("/", indexRouter);
app.use("/", userRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The server is live at http://localhost:${PORT}`);
});
