let API_URL = "";

if (import.meta.env.DEV) {
  //   API_URL = "https://localhost:3001";
  API_URL = "https://hungnguyen1611.online";
}

if (import.meta.env.PROD) {
  API_URL = "https://hungnguyen1611.online";
}

export { API_URL };
