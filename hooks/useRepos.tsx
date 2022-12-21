import reposApi from "../lib/api/repos";
import { DirectionType, ReposRes, SortType } from "../lib/api/repos/schema";

export const fetchRepositories = async (
  sort: SortType,
  direction: DirectionType,
  per_page: number,
  page: number
): Promise<ReposRes> => {
  const res = await reposApi.fetchRepos({
    username: process.env.NEXT_PUBLIC_USER_NAME as string,
    sort,
    direction,
    per_page,
    page,
  });

  return res;
};

const useRepos = () => {};

export default useRepos;
