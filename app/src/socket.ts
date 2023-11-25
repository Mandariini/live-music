import { io } from "socket.io-client";

import { WS_URL } from "./utils/config";

// TODO: Look into manager and getting multiple sockets
// TODO: Look into socket.io auth token
// TODO: Connection state recovery

const mediaSocket = io(`${WS_URL}/media`);
// const chatSocket = io(`${WS_URL}/chat`);

// export { mediaSocket, chatSocket };

export const socket = mediaSocket;
