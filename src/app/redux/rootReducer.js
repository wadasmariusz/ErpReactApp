import { combineReducers } from "redux"
import customizerReducer from "app/redux/@vuexy/@customizer/customizer";
import {fakeDbReducer} from "app/redux/@fakeDb/fakeDBReducer";
import navbarReducer from "app/redux/@vuexy/@navbar/navbar";
import {authReducer} from "app/redux/auth/authReducer";

const rootReducer = combineReducers({

  // VUEXY:
  customizer: customizerReducer,
  navbar: navbarReducer,

  // FAKE DB:
  fakeDb: fakeDbReducer,

  // REDUCERS:
  auth: authReducer,

});

export default rootReducer
