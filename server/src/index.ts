import http from "http";

import app from "./app";
import logger from "./utils/logger";
import config from "./utils/config";
import { useWebSocket } from "./ws";

// server.on("request", app);

// app.listen(config.PORT, () => {
//   logger.info(`Server running on port ${config.PORT}`);
// });

const server = http.createServer(app);
useWebSocket(server);

// server.on("upgrade", (req, socket, head) => {
//   const { pathname } = parse(req.url?.toString() ?? "", true);

//   if (pathname === "/ws") {
//     wss.handleUpgrade(req, socket, head, (ws) => {
//       wss.emit("connection", ws, req);
//     });
//   } else {
//     socket.destroy();
//   }
// });

server.listen(config.PORT, function () {
  logger.info(`http/ws server listening on ${config.PORT}`);
});
