import express from "express";
import * as config from "./src/config/config.js";
import db  from "./src/config/db.js";
import gasPriceRoute from "./src/routes/gasRoute.js"
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(gasPriceRoute);

app.listen(config.appPort, async () => {
  await db();
  console.log(`server running on port ${config.appPort}`);
});

