import express from "express";
import morgan from "morgan";
import path from "path";

import routes from "./routes";
import config from "./config";
import { notFoundHandler, globalErrorHandler } from "./middlewares/error-handlers.mw";
import { configurePassport } from "./middlewares/passport";

const app = express();

app.get("/status", (req, res) => res.sendStatus(200));
app.head("/status", (req, res) => res.sendStatus(200));

configurePassport(app);
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("dev"));
app.use(routes);
app.get(["/login", "/private", "/register", "/notes", "/notes/:id"], (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(config.app.port, () => console.log(`server runnin on Port ${config.app.port}! Good Shit.`));

// TESTING
