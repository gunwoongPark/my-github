import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";
import useRepos2 from "../../hooks/react-query/useRepos";
import reposApi from "../../lib/api/repos";
import type { DirectionType, SortType } from "../../lib/api/repos/schema";
import { queryKeys } from "../../react-query/queryKeys";
import { isNotBlank } from "../../util";

const ReposPage = () => {
  // router
  const router = useRouter();

  const {
    reposList,
    isLoading,
    direction,
    setDirection,
    sort,
    setSort,
    page,
    setPage,
  } = useRepos2();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <select
        value={direction}
        onChange={(e) => {
          setDirection(e.target.value as DirectionType);
          router.replace({
            pathname: "/repos",
            query: { sort, direction: e.target.value, page },
          });
        }}
      >
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>

      <select
        value={sort}
        onChange={(e) => {
          setSort(e.target.value as SortType);
          router.replace({
            pathname: "/repos",
            query: { sort: e.target.value, direction, page },
          });
        }}
      >
        <option value="pushed">pushed</option>
        <option value="updated">updated</option>
        <option value="created">created</option>
        <option value="full_name">full_name</option>
      </select>
      {isNotBlank(reposList) ? (
        <ul>
          {reposList.map((repos) => (
            <li key={repos.id}>{repos.name}</li>
          ))}
        </ul>
      ) : (
        <p>Repositories is Empty</p>
      )}
    </>
  );
};

export default ReposPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.repos, "pushed", "desc", 1], () =>
    reposApi.fetchRepos({ sort: "pushed", direction: "desc", page: 1 })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
