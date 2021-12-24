import {matchPath, useLocation} from "react-router-dom";

export const useMatchPathname = (path, options = {}) => {
  let location = useLocation();
  const match = matchPath(location.pathname, {
    path,
    exact: true,
    strict: false,
    ...options,
  });
  return !!match;
}
