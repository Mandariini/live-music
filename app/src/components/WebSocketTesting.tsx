import React, { useEffect, useState } from "react";
import { socket } from "../socket";
import { ConnectionState } from "./WebSocket/ConnectionState";
import { Events } from "./WebSocket/Events";
import { ConnectionManager } from "./WebSocket/ConnectionManager";
import { MyForm } from "./WebSocket/MyForm";

const SocketIoTesting = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    const onAny = (event, ...args) => {
      console.log(event, args);
    };

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

    const onFooEvent = (data) => {
      console.log(data);
    };

    const onError = (error) => {
      console.log(`Error: ${error}`);
    };

    socket.onAny(onAny);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("connect_error", onConnectError);
    socket.on("error", onError);
    socket.on("foo", onFooEvent);

    // Add all event registration cleanups here
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("connect_error", onConnectError);
      socket.off("error", onError);
      socket.off("foo", onFooEvent);

      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Dont buffer message if connection is dropped
    socket.volatile.timeout(5000).emit("hello", message);
  };

  return (
    <>
      <div>Socket.io Testing</div>
      <ConnectionState isConnected={isConnected} />
      <ConnectionManager />
      <MyForm />
    </>
  );
};

export default SocketIoTesting;
