

export const reducerFakeElementSet = (passedState, {groupName, elementName, elementValue}) => {

  const state = passedState[groupName] ? (
    passedState
  ) : (
    {
      ...passedState,
      [groupName]: {},
    }
  );
  let id = elementName;
  let __totalNo__ = state.__totalNo__;
  if(!elementName) {
    id = __totalNo__+1;
    __totalNo__++;
  }
  //console.log(id, elementName)

  return {
    ...state,
    [groupName]: {
      ...state[groupName],
      [id]: {
        ...elementValue,
        id,
      },
    },
    __totalNo__,
  }
}
