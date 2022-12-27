import { filter, isEmpty, isNil } from "lodash";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import useIsReady from "../../hooks/useIsReady";
import useRepos, { fetchRepositories } from "../../hooks/useRepos";
import {
  DirectionType,
  FilterValueType,
  SortType,
} from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";

const ReposPage = () => {
  // router
  const router = useRouter();

  const { reposList, isLoading, setFilterValue } = useRepos();

  return (
    <>
      <select
        // value={router.query.direction}
        defaultValue={router.query.direction ?? "asc"}
        onChange={(e) => {
          setFilterValue((prevFilterValueState) => ({
            ...prevFilterValueState,
            direction: e.target.value as DirectionType,
          }));

          router.replace({
            pathname: "/repos",
            query: { direction: e.target.value, sort: router.query.sort },
          });
        }}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>

      <select
        // value={router.query.sort}
        defaultValue={router.query.sort ?? "full_name"}
        onChange={(e) => {
          setFilterValue((prevFilterValueState) => ({
            ...prevFilterValueState,
            sort: e.target.value as SortType,
          }));

          router.replace({
            pathname: "/repos",
            query: { direction: router.query.direction, sort: e.target.value },
          });
        }}
      >
        <option value="full_name">full_name</option>
        <option value="created">created</option>
        <option value="updated">updated</option>
        <option value="pushed">pushed</option>
      </select>

      {(() => {
        if (isLoading) {
          return <p>Loading...</p>;
        }

        if (isNil(reposList)) {
          return <p>Error Occurred</p>;
        }

        if (isEmpty(reposList)) {
          return <p>Empty</p>;
        }

        return (
          <ul>
            {reposList.map((repos, idx) => (
              <li key={idx}>{repos.name}</li>
            ))}
          </ul>
        );
      })()}
    </>
  );
};

export default ReposPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [queryKeys.repos, "full_name", "asc", 1],
    () => fetchRepositories(`&sort=full_name&direction=asc&page=1`)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
