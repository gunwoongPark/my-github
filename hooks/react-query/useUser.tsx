import { useQuery } from "react-query";
import userApi from "../../lib/api/user";
import { UserRes } from "../../lib/api/user/schema";
import { queryKeys } from "../../react-query/queryKeys";

const useUser = () => {
  const { data: userInformation, isFetching } = useQuery(
    [queryKeys.user],
    async () => await userApi.fetchUser()
  );

  return { userInformation, isFetching };
};

export default useUser;
