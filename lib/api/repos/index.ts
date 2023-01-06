import { isNil } from "lodash";
import apiBase from "..";
import { ReposReq, ReposRes } from "./schema";

const reposApi = {
  /**
   * 토큰틀 통한 유저의 레포지토리 불러오기
   * @param  {ReposReq} {query}
   * @returns Promise
   */
  fetchRepos: ({ query }: ReposReq): Promise<ReposRes[]> =>
    apiBase.get(`user/repos?per_page=5${isNil(query) ? "" : query}`),
};

export default reposApi;
