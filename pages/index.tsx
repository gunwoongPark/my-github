import { useEffect } from "react";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";
import useUser from "../hooks/react-query/useUser";
import userApi from "../lib/api/user";
import { queryKeys } from "../react-query/queryKeys";

export default function HomePage() {
  const { userInformation, isFetching } = useUser();

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return <S.Container></S.Container>;
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([queryKeys.user], async () =>
    userApi.fetchUser()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const S = {
  Container: styled.div``,
};
