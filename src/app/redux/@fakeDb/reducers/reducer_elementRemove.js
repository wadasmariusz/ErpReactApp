

export const reducerFakeElementRemove = (state, {groupName, elementName}) => {

  if(!state[groupName] || !state[groupName][elementName]){
    console.log('ERROR: reducerElementRemove, groupName OR elementName not found');
    return state;
  }

  const {[elementName]: removedElement, ...newState} = state[groupName];

  return {
    ...state,
    [groupName]: {
      ...newState,
    }
  }
}
