const express = require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const app = express();

//init
(() => {
  app.listen(3000);
  console.log("server on port 3000");
})();

//settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(flash());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: false }));
//session
app.use(
  session({
    secret: "thisasecretpassword",
    resave: false,
    saveUninitialized: false,
  })
);
//global varibles para acceder en la vista
app.use((req, res, next) => {
  res.locals.session = req.flash("message");
  next();
});

//routes
app.use(require("./routes/index"));
