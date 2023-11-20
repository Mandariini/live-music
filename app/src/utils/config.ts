console.log(import.meta.env.BASE_URL);

const API_BASE_URL: string = import.meta.env.DEV
  ? import.meta.env.VITE_TEST_API_URL
  : import.meta.env.VITE_PROD_API_URL;

if (!API_BASE_URL) {
  throw new Error("Backend URL not set");
}

const WS_URL: string = import.meta.env.DEV
  ? import.meta.env.VITE_TEST_WS_URL
  : import.meta.env.VITE_PROD_WS_URL;
if (!WS_URL) {
  throw new Error("Websocket URL not set");
}

export { WS_URL, API_BASE_URL };
