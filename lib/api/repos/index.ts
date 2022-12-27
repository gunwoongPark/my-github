import apiBase from "..";
import { ReposReq, ReposRes } from "./schema";

const reposApi = {
  fetchRepos: ({
    username,
    sort,
    direction,
    per_page,
    page,
  }: ReposReq): Promise<ReposRes[]> =>
    apiBase.get(
      `users/${username}/repos?sort=${sort}&direction=${direction}&per_page=${per_page}&page=${page}`
    ),
};

export default reposApi;
