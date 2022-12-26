import axios from "axios";
import { BASE_URL } from "..";

export default async function getRequestJson(path: string) {
  const res = await axios.get(`${BASE_URL}${path}`, {
    headers: {
      "Accept-Encoding": "*r",
      "Referer": "https://zoro.to/",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
  return res.data;
}
