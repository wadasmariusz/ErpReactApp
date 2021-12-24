import {useEffect, useRef} from "react";

export const usePrev = (current) => {
  const ref = useRef(current);

  // will be updated on the next render
  useEffect(() => {
    ref.current = current;
  });

  // return the existing current (pre render)
  return ref.current;
}
