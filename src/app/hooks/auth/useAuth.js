import {useSelectUser} from "app/redux/auth/selectors/selectUser";
import {useSelectToken} from "app/redux/auth/selectors/selectToken";

export const useAuth = () => {

  const {userRoles} = useSelectUser();
  const token = useSelectToken();

  const isLoggedIn = () => {
    return !!token;
  }

  const hasRole = (role) => {
    return userRoles && userRoles?.find && userRoles.find(r=>r===role);
  }

  return {
    isLoggedIn,
    hasRole,
  }
}
