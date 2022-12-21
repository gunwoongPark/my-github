import { dehydrate, QueryClient } from "react-query";
import { queryKeys } from "../../react-query/queryKeys";

const ReposPage = () => {
  return <></>;
};

export default ReposPage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.repos]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
