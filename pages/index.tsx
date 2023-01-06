import { dehydrate, QueryClient, useQueryClient } from "react-query";
import useUser, { fetchUserInformation } from "../hooks/react-query/useUser";
import { queryKeys } from "../react-query/queryKeys";

export default function HomePage() {
  // const { userInformation, isFetching } = useUser();

  // if (isFetching) {
  //   return <p>Loading...</p>;
  // }

  const queryClient = useQueryClient();

  return <div>{/* <p>{userInformation?.login}</p> */}</div>;
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.user], fetchUserInformation);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
