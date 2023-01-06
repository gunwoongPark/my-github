import { useRouter } from "next/router";
import { useState } from "react";
import type {
  DirectionType,
  FilterValueType,
  SortType,
} from "../../lib/api/repos/schema";
import useIsReady from "../useIsReady";

const useRepos2 = () => {
  // router
  const router = useRouter();

  // state
  const [sort, setSort] = useState<SortType>("pushed");
  const [direction, setDirection] = useState<DirectionType>("desc");
  const [page, setPage] = useState<number>(1);

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
    }
  });

  return {};
};

export default useRepos2;
