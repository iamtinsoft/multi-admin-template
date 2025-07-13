import { apiBaseUrl, TokenKey } from "@/config";
import { getWithExpiry } from "@/lib/token";
import axios from "axios";

const jwtToken = getWithExpiry(TokenKey);

export default axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "x-auth-token":
      jwtToken,
  },
});

