import React, {useRef, useState} from 'react';
import useDetectOutsideClick from "app/hooks/helpers/useDetectOutsideClick";

const INSIDE = true;
const OUTSIDE = false;

export const DetectOutsideClick = ({children, onClickInside, onClickOutside}) => {

  const containerRef = useRef(null);
  const stateRef = useRef(OUTSIDE);

  const [state, setState] = useState(OUTSIDE);
  stateRef.current = state;

  const handleClickInside = () => {
    onClickInside(stateRef.current===INSIDE);
    setState(INSIDE);
  }

  const handleClickOutside = () => {
    onClickOutside(stateRef.current===OUTSIDE);
    setState(OUTSIDE);
  }

  useDetectOutsideClick(containerRef, handleClickOutside, handleClickInside, '.flatpickr-calendar');

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};
