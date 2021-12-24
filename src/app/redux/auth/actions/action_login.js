import { TYPE_LOGIN_WITH_EMAIL } from "app/redux/auth/authTypes";

export const actionLogin = (userToken, { userId, firstName, lastName, userRoles, userEmail }) => ({
  type: TYPE_LOGIN_WITH_EMAIL,
  payload: {
    userToken,
    firstName,
    lastName,
    userId,
    userRoles,
    userEmail,
  },
});
