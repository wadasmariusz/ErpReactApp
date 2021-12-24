import {
  TYPE_LOGIN_WITH_EMAIL,
  TYPE_LOGOUT,
  TYPE_ME,
} from "app/redux/auth/authTypes";
import { reducerLoginWithEmail } from "app/redux/auth/reducers/reducer_loginWithEmail";
import { reducerRehydrate } from "app/redux/auth/reducers/@reducer_Rehydrate";
import { persistReducer } from "redux-persist";
import { reducerLogout } from "app/redux/auth/reducers/reducer_logout";
import storage from "redux-persist/lib/storage";
import { reducer_me } from "app/redux/auth/reducers/reducer_me";

const initialState = () => ({
  userToken: null,
  user: {
    // userProfilePhotoUrl: null,
    userRoles: [],
    userId: null,
    // userName: null,
    userEmail: null,
  },
});

const reducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case TYPE_LOGIN_WITH_EMAIL:
      return reducerLoginWithEmail(state, payload);
    case TYPE_LOGOUT:
      return reducerLogout(initialState);
    case TYPE_ME:
      return reducer_me(state, payload);
    case "persist/REHYDRATE":
      return reducerRehydrate(state, initialState);
    default:
      return state;
  }
};

const persistConfig = {
  key: "pigener.auth.userToken",
  storage,
  whitelist: ["userToken"],
};

export const authReducer = persistReducer(persistConfig, reducer);
