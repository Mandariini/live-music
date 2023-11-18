import express, { Request, Response } from "express";
import cors from "cors";

import middleware from "./utils/middleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(middleware.tokenExtractor);
app.use(middleware.requestLogger);

interface Media {
  title: string;
  url: string;
}

interface Lobby {
  id: string;
  name: string;
  mediaQueue: Media[];
  currentMedia: Media;
}

const initialLobbies: Lobby[] = [
  {
    id: "1",
    name: "Hardstyle",
    mediaQueue: [
      {
        title: "Angerfist - Street Fighter",
        url: "https://www.youtube.com/watch?v=6YlX2uItv_s",
      },
      {
        title: "Armin van Buuren - Blah Blah Blah",
        url: "https://www.youtube.com/watch?v=uBQ1wt3VZ4M",
      },
      {
        title: "Skrillex - Bangarang",
        url: "https://www.youtube.com/watch?v=kn59Yn55Pos",
      },
    ],
    currentMedia: {
      title: "Angerfist - Street Fighter",
      url: "https://www.youtube.com/watch?v=6YlX2uItv_s",
    },
  },
];

// const initialSongs = [

const PORT = 3001;

app.get("/api/v1/lobbies", (_req: Request, res: Response): void => {
  res.json(initialLobbies);
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
