import {useState} from "react";

export const useTree = (defaultId) => {
  const [currentNode, setCurrentNode] = useState(defaultId);

  const toggle = (id) => {
    if (currentNode === id) {
      return () => setCurrentNode(null);
    } else {
      return () => setCurrentNode(id);
    }
  }

  const isExpanded = (id) => {
    return id === currentNode;
  }

  return {toggle, isExpanded};
}
