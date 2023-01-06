import { isNil } from "lodash";
import apiBase from "..";
import { ReposReq, ReposRes } from "./schema";

const reposApi = {
  /**
   * 토큰틀 통한 유저의 레포지토리 불러오기
   * @param  {ReposReq} {query}
   * @returns Promise
   */
  fetchRepos: ({
    sort = "pushed",
    direction = "desc",
    page = 1,
  }: ReposReq): Promise<ReposRes[]> =>
    apiBase.get(
      `user/repos?per_page=5&sort=${sort}&direction=${direction}&page=${page}`
    ),
};

export default reposApi;
