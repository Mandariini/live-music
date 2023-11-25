import { useState } from "react";
import { socket } from "../../socket";
import { HostAction, TSyncMessage } from "../../types";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const message: TSyncMessage = {
      lobbyId: "asd",
      hostAction: HostAction.Playing,
      mediaId: "2345",
      videoTimestamp: 0,
    };

    // Dont buffer message if connection is dropped
    socket.emit("hostAction", message, () => {
      setIsLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
