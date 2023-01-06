import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import useRepos2 from "../hooks/react-query/useRepos2";
import reposApi from "../lib/api/repos";
import { queryKeys } from "../react-query/queryKeys";

const Repos2Page = () => {
  const {} = useRepos2();

  return <></>;
};

export default Repos2Page;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.repos, "pushed", "desc", 1], () =>
    reposApi.fetchRepos({ query: "&sort=pushed&direction=desc&page=1" })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
