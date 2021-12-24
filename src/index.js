import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Layout } from "app/context/@vuexy/Layout"
import * as serviceWorker from "./serviceWorker"
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from "app/redux/store"
import {setupAxios} from "setupAxios";
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
//
import "./index.scss"

const LazyApp = lazy(() => import("./App.js"));

setupAxios(store);

// configureDatabase()
ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Spinner />}>
          <Layout>
            <LazyApp />
          </Layout>
        </Suspense>
      </PersistGate>
    </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
