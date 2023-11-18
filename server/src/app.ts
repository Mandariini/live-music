import express from "express";
import cors from "cors";

import lobbyRouter from "./controllers/lobbies";
import middleware from "./utils/middleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(middleware.tokenExtractor);
app.use(middleware.requestLogger);

app.use("/api/v1/lobbies", lobbyRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
