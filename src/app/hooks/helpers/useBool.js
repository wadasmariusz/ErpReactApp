import {useState} from "react";


export const useBool = (defaultState = true) => {
  const [state, setState] = useState(defaultState);

  const toggle = () => setState(a=>!a);
  const on = () => setState(true);
  const off = () => setState(false);

  return {
    toggle,
    state,
    off,
    on,
  }
}
