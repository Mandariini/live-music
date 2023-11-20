import http from "http";
import SocketIo from "socket.io";
// import WebSocket from "ws";
// import server from "./server";

// const wss = new WebSocket.Server({ noServer: true });

// const lobbies = new Map<string, WebSocket>();

interface SyncMessage {
  message: string;
  meta: string;
  lobbyId: string;
}

const useWebSocket = (server: http.Server) => {
  const io = new SocketIo.Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", function connection(socket) {
    //   const uuid = Math.random().toString(36).substring(2, 15);

    socket.on("open", function open() {
      socket.send("something");
    });

    socket.on("close", function close() {
      console.log("disconnected");
    });

    socket.on("hello", (data) => {
      console.log(`hello: ${data}`);
      // local vs broadcast
      socket.local.emit("hello", "all");
    });

    socket.on("message", (data) => {
      console.log(`received: ${data}`);

      let message: SyncMessage;
      try {
        message = JSON.parse(data.toString()) as SyncMessage;
      } catch (error) {
        socket.send(JSON.stringify({ error: "invalid message" }));
        return;
      }
      console.log(message.message, message.meta, message.lobbyId);

      socket.send(
        JSON.stringify({
          answer: 42,
        })
      );
    });
  });
};

export { useWebSocket };
