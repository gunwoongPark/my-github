import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dehydrate, QueryClient } from "react-query";
import useRepos, { fetchRepositories } from "../../hooks/useRepos";
import { DirectionType, SortType } from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";

const ReposPage = () => {
  // router
  const router = useRouter();

  const { reposList, isLoading, setSort, setDirection } = useRepos();

  useEffect(() => {
    console.log(reposList);
  }, [reposList]);

  return (
    <>
      <select
        onChange={(e) => {
          setDirection(e.target.value as DirectionType);
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
        onChange={(e) => {
          setSort(e.target.value as SortType);
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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reposList?.map((repos, idx) => (
            <li key={idx}>{repos.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReposPage;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    [queryKeys.repos, "full_name", "asc", 1],
    () => fetchRepositories("full_name", "asc", 5, 1)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
