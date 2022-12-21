import apiBase from "..";
import { UserRes } from "./schema";

const userApi = {
  fetchUser: (): Promise<UserRes> => apiBase.get("/user"),
};

export default userApi;
