import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import reposApi from "../../lib/api/repos";
import type { DirectionType, SortType } from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";
import { isNotNaN } from "../../util";
import useIsReady from "../useIsReady";

const useRepos2 = () => {
  // router
  const router = useRouter();

  // state
  const [sort, setSort] = useState<SortType>("pushed");
  const [direction, setDirection] = useState<DirectionType>("desc");
  const [page, setPage] = useState<number>(1);

  // router ready
  useIsReady(() => {
    if (router.query.sort) {
      const sortArr: SortType[] = ["created", "full_name", "pushed", "updated"];
      sortArr.forEach((_sort) => {
        if (_sort === router.query.sort) {
          setSort(_sort);
        }
      });
    }

    if (router.query.direction) {
      const directionArr: DirectionType[] = ["asc", "desc"];
      directionArr.forEach((_direction) => {
        if (_direction === router.query.direction) {
          setDirection(_direction);
        }
      });
    }

    if (router.query.page) {
      const _page = Number(router.query.page);
      if (isNotNaN(_page)) {
        setPage(_page);
      }
    }
  });

  // query
  const { data: reposList = [], isLoading } = useQuery(
    [queryKeys.repos, sort, direction, page],
    () => reposApi.fetchRepos({ sort, direction, page })
  );

  return { reposList, isLoading };
};

export default useRepos2;
