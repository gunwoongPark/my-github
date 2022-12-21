import { dehydrate, QueryClient } from "react-query";
import useUser, { fetchUserInformation } from "../hooks/useUser";
import { queryKeys } from "../react-query/queryKeys";

export default function HomePage() {
  const { userInformation, isFetching } = useUser();

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{userInformation?.login}</p>
    </div>
  );
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
