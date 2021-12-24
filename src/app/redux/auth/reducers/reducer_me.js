export const reducer_me = (state, { userId, userName,  userRoles, companyLogoUrl }) => {
  return {
    ...state,
    user: {
      ...state.user,
      userId,
      userName,
      userRoles,
      companyLogoUrl
    }
  }
}
