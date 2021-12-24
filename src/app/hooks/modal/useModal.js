import useObjectState from "app/hooks/state/useObjectState";


export const useModal = () => {
  const [{isOpen, param}, setState] = useObjectState({ isOpen: false, param: null });

  const open = (param = null) => setState({ isOpen: true, param: param?.param??null });
  const close = () => setState({ isOpen: false, param: null });

  return {
    isOpen,
    open,
    close,
    param,
  };
}
