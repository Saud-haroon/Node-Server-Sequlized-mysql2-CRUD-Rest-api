const express = require("express");

const cors = require("cors");
const app = express();
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("#droped the database and and re-synced.");
  });
var corsOptions = {
    origin: "http://localhost:6000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to saud test application." });
// });
// db.sequelize.sync().then(console.log).catch(console.log)

app.get('/', (req, res) => {
    res.send('APP IS RUNNING')
});

require("./app/routes/tutroial.routes")(app)

// const appRoutes = require('./app/routes/tutroial.routes') //'./app/tutroial.routes'


// app.use('/api/tutorial', appRoutes);
// set port, listen for requests
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});