

export const reducerFakeElementEdit = (state, {groupName, elementName, elementKey, elementValue, isSimple=false}) => {

  if(!state[groupName] || !state[groupName][elementName]){
    console.log('ERROR: reducerElementRemove, groupName OR elementName not found');
    return state;
  }
  if(!isSimple && ! !state[groupName][elementName][elementKey]) {
    console.log('ERROR: reducerElementRemove, elementKey not found');
  }

  if(isSimple) {
    return {
      ...state,
      [groupName]: {
        ...state[groupName],
        [elementName]: elementValue,
      }
    }
  } else {
    return {
      ...state,
      [groupName]: {
        ...state[groupName],
        [elementName]: {
          ...state[groupName][elementName],
          [elementKey]: elementValue,
        }
      }
    }
  }
}
