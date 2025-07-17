let API_URL = "";

if (import.meta.env.DEV) {
  //   API_URL = "https://localhost:3001";
  API_URL = "http://localhost:3001";
}

if (import.meta.env.PROD) {
  API_URL = "https://hungnguyen1611.online/api/commerce";
}

export { API_URL };
