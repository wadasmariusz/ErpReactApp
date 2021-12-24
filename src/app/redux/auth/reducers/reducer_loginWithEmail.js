export const reducerLoginWithEmail = (
  state,
  { userToken, userId, userRoles, userEmail },
) => {
  return {
    ...state,
    userToken,
    user: {
      ...state.user,
      userId,
      userRoles,
      userEmail,
    },
  };
};
