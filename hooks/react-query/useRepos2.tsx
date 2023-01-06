import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type {
  DirectionType,
  FilterValueType,
  SortType,
} from "../../lib/api/repos/schema";
import useIsReady from "../useIsReady";

const useRepos2 = () => {
  // router
  const router = useRouter();

  const [filterValue, setFilterValue] = useState<FilterValueType>({
    sort: "pushed",
    direction: "desc",
    page: 1,
  });

  useIsReady(() => {
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

    if (router.query.page) {
      setFilterValue((prevFilterValueState) => ({
        ...prevFilterValueState,
        page: Number(router.query.page),
      }));
    }
  });

  useEffect(() => {}, []);

  return {};
};

export default useRepos2;
