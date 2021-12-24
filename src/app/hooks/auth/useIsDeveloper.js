import {useAuth} from "app/hooks/auth/useAuth";

export const useIsDeveloper = () => {
  const { hasRole } = useAuth();
  //
  return hasRole(role.developer) || window.location.hostname === 'localhost';
}
