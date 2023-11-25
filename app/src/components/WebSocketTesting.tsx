import { useEffect, useState } from "react";
import { socket } from "../socket";
import { ConnectionState } from "./WebSocket/ConnectionState";
import { ConnectionManager } from "./WebSocket/ConnectionManager";
import { MyForm } from "./WebSocket/MyForm";

const SocketIoTesting = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();
    socket.emit("joinLobby", "asd");

    const onConnect = () => {
      console.log("connected");
      setIsConnected(true);
    };

    const onDisconnect = () => {
      console.log("disconnected");
    };

    const onConnectError = (error) => {
      console.log(`connect error ${error}`);
    };

    const onSyncMessage = (data) => {
      console.log(data);
    };

    const onError = (error) => {
      console.log(`Error: ${error}`);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);
    socket.on("error", onError);
    socket.on("syncMessage", onSyncMessage);

    // Add all event registration cleanups here
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);
      socket.off("error", onError);
      socket.off("syncMessage", onSyncMessage);

      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div>Socket.io Testing</div>
      <ConnectionState isConnected={isConnected} />
      {/* <ConnectionManager /> */}
      {/* <MyForm /> */}
    </>
  );
};

export default SocketIoTesting;
