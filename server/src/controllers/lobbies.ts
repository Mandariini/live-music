import { Router } from "express";

import initialLobbies from "../data/lobbies";

const lobbyRouter = Router();

lobbyRouter.get("/", (_req, res) => {
  res.json(initialLobbies);
});

lobbyRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const lobby = initialLobbies.find((lobby) => lobby.id === id);

  if (lobby) {
    res.json(lobby);
  } else {
    res.status(404).end();
  }
});

export default lobbyRouter;
