import { useQuery } from "react-query";
import userApi from "../../lib/api/user";
import { UserRes } from "../../lib/api/user/schema";
import { queryKeys } from "../../react-query/queryKeys";

export const fetchUserInformation = async (): Promise<UserRes> => {
  const res = await userApi.fetchUser();
  return res;
};

const useUser = () => {
  const { data: userInformation, isFetching } = useQuery(
    [queryKeys.user],
    fetchUserInformation
  );

  return { userInformation, isFetching };
};

export default useUser;
