import {createStore, applyMiddleware, compose} from "redux"
import createDebounce from "redux-debounced"
import thunk from "redux-thunk"
import rootReducer from "app/redux/rootReducer"
import {persistStore} from "redux-persist";

const middlewares = [thunk, createDebounce()]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)
const persistor = persistStore(store);

export {store, persistor}
