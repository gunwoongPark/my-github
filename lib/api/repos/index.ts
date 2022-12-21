import apiBase from "..";
import { ReposReq, ReposRes } from "./schema";

const reposApi = {
  fetchRepos: ({ username }: ReposReq): Promise<ReposRes> =>
    apiBase.get(`users/${username}/repos`),
};

export default reposApi;
