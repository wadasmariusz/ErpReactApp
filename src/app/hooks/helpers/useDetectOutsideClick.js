import {useEffect} from 'react';

const isWhitelisted = (elements, ev) => {
  return elements.some(element=> element.contains(ev.target));
}

const useDetectOutsideClick = (ref, onClickOutside = ()=>{}, onClickInside = ()=>{}, disabledClass) => {
  const listener = (ev) => {
    const elements = disabledClass ? Array.from(document.querySelectorAll(disabledClass)) : [];
    // ev.stopPropagation();
    // console.log(isWhitelisted(elements, ev), ev)
    if(!ref.current || ref.current.contains(ev.target) || isWhitelisted(elements, ev)){
      onClickInside();
    } else {
      onClickOutside();
    }
  };
  useEffect(()=>{
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};

export default useDetectOutsideClick;
