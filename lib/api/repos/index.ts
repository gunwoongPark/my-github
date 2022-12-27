import { isNil } from "lodash";
import apiBase from "..";
import { ReposReq, ReposRes } from "./schema";

const reposApi = {
  fetchRepos: ({ username, query }: ReposReq): Promise<ReposRes[]> =>
    apiBase.get(
      `users/${username}/repos?per_page=5${isNil(query) ? "" : query}`
    ),
};

export default reposApi;
