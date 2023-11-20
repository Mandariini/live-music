import { io } from "socket.io-client";

import { WS_URL } from "./utils/config";

// TODO: Look into manager and getting multiple sockets
// TODO: Look into socket.io auth token
// TODO: Connection state recovery

export const socket = io(WS_URL);
