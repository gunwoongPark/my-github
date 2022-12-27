import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import useIsReady from "../../hooks/useIsReady";
import useRepos, { fetchRepositories } from "../../hooks/useRepos";
import { DirectionType, SortType } from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";

const ReposPage = () => {
  // router
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

  useEffect(() => {
    console.log(page, direction, sort);
  }, [page, direction, sort]);

  return (
    <>
      <select
        value={direction ?? "asc"}
        onChange={(e) => {
          setDirection(e.target.value as DirectionType);
          router.replace({
            pathname: "/repos",
            query: { direction: e.target.value, sort: sort },
          });
        }}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <select
        value={sort ?? "full_name"}
        onChange={(e) => {
          setSort(e.target.value as SortType);
          router.replace({
            pathname: "/repos",
            query: { direction: direction, sort: e.target.value },
          });
        }}
      >
        <option value="full_name">full_name</option>
        <option value="created">created</option>
        <option value="updated">updated</option>
        <option value="pushed">pushed</option>
      </select>
    </>
  );
};

export default ReposPage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.repos, 1], () =>
    fetchRepositories("full_name", "asc", 5, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
