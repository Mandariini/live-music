import http from "http";
import SocketIo from "socket.io";
// import WebSocket from "ws";
// import server from "./server";

// const wss = new WebSocket.Server({ noServer: true });

// const lobbies = new Map<string, WebSocket>();

// const MESSAGE_FREQUENCY_MS = 1000;

enum HostAction {
  Playing,
  Stop,
}

interface SyncMessage {
  lobbyId: string;
  hostAction: HostAction;
  mediaId: string;
  videoTimestamp: number;
  //   timestampUTC: number;
}

const syncMessages = new Map<string, SyncMessage>();
// const syncIntervals = new Map<string, NodeJS.Timeout>();

const useWebSocket = (server: http.Server) => {
  const io = new SocketIo.Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  const mediaIo = io.of("/media");

  const sendSyncMessageToLobby = (lobbyId: string) => {
    const syncMessage = syncMessages.get(lobbyId);

    console.log(syncMessage);

    if (syncMessage) {
      mediaIo.to(lobbyId).emit("syncMessage", syncMessage);
    }
  };

  // Set up interval to send sync messages every second to all lobbies
  setInterval(() => {
    const lobbyIds = Array.from(syncMessages.keys());
    console.log(lobbyIds);
    lobbyIds.forEach((lobbyId) => sendSyncMessageToLobby(lobbyId));
  }, 1000);

  mediaIo.on("connection", function connection(socket) {
    //   const uuid = Math.random().toString(36).substring(2, 15);

    socket.join("1");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

    socket.on("joinLobby", (lobbyId) => {
      console.log("JOIN LOBBY", lobbyId);
      socket.join(lobbyId);
      mediaIo.to(lobbyId).emit("message", "New user joined");
    });

    socket.on("hostAction", (data) => {
      try {
        // TODO: authenticate host

        console.log(data);

        const syncMessage = data as SyncMessage;

        syncMessages.set(syncMessage.lobbyId, syncMessage);

        console.log(syncMessages);
      } catch (e) {
        console.log(`Host action error: ${e}`);
      }
    });
  });
};

export { useWebSocket };
