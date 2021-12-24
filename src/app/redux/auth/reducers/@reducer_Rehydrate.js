
export const reducerRehydrate = (state, initialState) => {

  return {
    ...initialState(),
    ...state,
  };
}
