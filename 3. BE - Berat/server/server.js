require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const weightRoutes = require("./routes/weightRoutes");

async function main() {
  try {
    const app = express();
    const PORT = process.env.PORT || 8080;

    // database connection
    connection();

    // middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors({origin: '*'}));

    // routes
    app.use(weightRoutes);

    // listening on port
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log("main", error);
  }
}

main();