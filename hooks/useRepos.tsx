import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import reposApi from "../lib/api/repos";
import { DirectionType, ReposRes, SortType } from "../lib/api/repos/schema";
import { queryKeys } from "../react-query/queryKeys";
import useIsReady from "./useIsReady";

export const fetchRepositories = async (
  sort: SortType,
  direction: DirectionType,
  per_page: number,
  page: number
) => {
  const res = await reposApi.fetchRepos({
    username: process.env.NEXT_PUBLIC_USER_NAME as string,
    sort,
    direction,
    per_page,
    page,
  });

  return res;
};

const useRepos = () => {
  const router = useRouter();

  const [page, setPage] = useState<number | null>(null);
  const [sort, setSort] = useState<SortType | null>(null);
  const [direction, setDirection] = useState<DirectionType | null>(null);

  // init query
  useIsReady(() => {
    if (router.query.page) {
      const pageNumber = Number(router.query.page);
      setPage(pageNumber);
    }

    if (router.query.sort) {
      setSort(router.query.sort as SortType);
    }

    if (router.query.direction) {
      setDirection(router.query.direction as DirectionType);
    }
  });

  const { data: reposList, isLoading } = useQuery(
    [queryKeys.repos, sort ?? "full_name", direction ?? "asc", page ?? 1],
    () =>
      fetchRepositories(sort ?? "full_name", direction ?? "asc", 5, page ?? 1)
  );

  return { reposList, isLoading, setSort, setDirection };
};

export default useRepos;
