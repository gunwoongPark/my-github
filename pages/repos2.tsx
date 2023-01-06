import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import useRepos2 from "../hooks/react-query/useRepos2";
import reposApi from "../lib/api/repos";
import { queryKeys } from "../react-query/queryKeys";
import { isNotBlank } from "../util";

const Repos2Page = () => {
  const { reposList, isLoading } = useRepos2();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
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

export default Repos2Page;

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
