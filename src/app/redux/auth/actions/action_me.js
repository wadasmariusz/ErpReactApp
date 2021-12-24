import {TYPE_ME} from "app/redux/auth/authTypes";

export const actionMe = (userId, firstName, lastName,  userRoles, userEmail, companyLogoUrl) => ({
  type: TYPE_ME,
  payload: {
    userId,
    firstName,
    lastName,
    userRoles,
    userEmail,
    companyLogoUrl,
  }
})
