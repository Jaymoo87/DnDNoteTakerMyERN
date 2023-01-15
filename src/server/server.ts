import express from "express";
import morgan from "morgan";

import routes from "./routes";
import config from "./config";
import { notFoundHandler, globalErrorHandler } from "./middlewares/error-handlers";

const app = express();

app.get("/status", (req, res) => res.sendStatus(200));
app.head("/status", (req, res) => res.sendStatus(200));

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(config.app.port, () => console.log(`server runnin on Port ${config.app.port}! Good Shit.`));
