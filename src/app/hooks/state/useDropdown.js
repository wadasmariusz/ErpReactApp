import {useState} from "react";


export const useDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(a=>!a);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    open,
    close,
  }
}
