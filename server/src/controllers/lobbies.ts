import { Router } from "express";

import initialLobbies from "../data/lobbies";

const lobbyRouter = Router();

lobbyRouter.get("/", (_req, res) => {
  res.json(initialLobbies);
});

export default lobbyRouter;
