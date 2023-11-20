import axios from "axios";
import { TLobby } from "../types";

import { API_BASE_URL } from "../utils/config";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

const getAll = async () => {
  const { data } = await axios.get<TLobby[]>("/lobbies");

  return data;
};

const getLobby = async (id: string) => {
  const { data } = await axios.get<TLobby>(`/lobbies/${id}`);

  return data;
};

export default {
  getAll,
  getLobby,
};
