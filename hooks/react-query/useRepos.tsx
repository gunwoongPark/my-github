import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import reposApi from "../../lib/api/repos";
import {
  DirectionType,
  FilterValueType,
  SortType,
} from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";
import useIsReady from "../useIsReady";

export const fetchRepositories = async (query?: string) => {
  const res = await reposApi.fetchRepos({
    query,
  });

  return res;
};

const useRepos = () => {
  const router = useRouter();

  const [filterValue, setFilterValue] = useState<FilterValueType>({
    sort: "full_name",
    direction: "asc",
    page: 1,
  });

  // init query
  useIsReady(() => {
    if (router.query.page) {
      setFilterValue((prevFilterValueState) => ({
        ...prevFilterValueState,
        page: Number(router.query.page),
      }));
    }

    if (router.query.sort) {
      setFilterValue((prevFilterValueState) => ({
        ...prevFilterValueState,
        sort: router.query.sort as SortType,
      }));
    }

    if (router.query.direction) {
      setFilterValue((prevFilterValueState) => ({
        ...prevFilterValueState,
        direction: router.query.direction as DirectionType,
      }));
    }
  });

  const queryString = (filterObject: FilterValueType) => {
    const queryKeys = Object.keys(filterObject);

    if (isEmpty(queryKeys)) {
      return undefined;
    }

    return queryKeys.map((key) => `&${key}=${filterObject[key]}`).join("");
  };

  const { data: reposList, isLoading } = useQuery(
    [
      queryKeys.repos,
      filterValue.sort ?? "full_name",
      filterValue.direction ?? "asc",
      filterValue.page ?? 1,
    ],
    () => fetchRepositories(queryString(filterValue))
  );

  return { reposList, isLoading, setFilterValue };
};

export default useRepos;
