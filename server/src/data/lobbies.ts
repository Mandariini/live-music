import { Lobby } from "../types";

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

export default initialLobbies;
