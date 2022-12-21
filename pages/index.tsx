import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import useUser, { fetchUserInformation } from "../hooks/useUser";
import { queryKeys } from "../react-query/queryKeys";

export default function HomePage() {
  // const { userInformation } = useUser();

  return <h1>HELLO NEXT</h1>;
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.user], fetchUserInformation);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
