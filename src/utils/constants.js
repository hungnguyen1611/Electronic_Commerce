let API_URL = "";

if (import.meta.env.DEV) {
  //   API_URL = "https://localhost:3001";
  API_URL = "http://160.250.180.19";
}

if (import.meta.env.PROD) {
  API_URL = "https://hungnguyen1611.online/api/commerce";
}

export { API_URL };
