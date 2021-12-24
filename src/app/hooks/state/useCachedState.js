import {useEffect, useState} from "react";

export const useCachedState = (state, timeout = 400) => {
  const [cachedState, setCachedState] = useState(state);

  useEffect(() => {
    const timer = setTimeout(() => setCachedState(state), timeout?.current??timeout);
    return () => {
      clearTimeout(timer);
    }
  }, [state]);

  return cachedState;
}
