import { useQuery } from "react-query";
import userApi from "../lib/api/user";
import { queryKeys } from "../react-query/queryKeys";

export const fetchUserInformation = async () => {
  const res = await userApi.fetchUser();
  return res;
};

const useUser = () => {
  const { data: userInformation } = useQuery(
    [queryKeys.user],
    fetchUserInformation
  );

  return { userInformation };
};

export default useUser;
