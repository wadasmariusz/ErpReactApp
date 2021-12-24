import React, { useEffect } from "react";
import Router from "app/router/Router";
import "./i18n";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
// css
import "./components/@vuexy/rippleButton/RippleButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "flag-icon-css/css/flag-icon.min.css";
import "react-toastify/dist/ReactToastify.css";
// import "../src/@assets/landing/js/plugin/jquery.min.js";
// import "../src/@assets/landing/js/plugin/waypoint.min.js";
// import "../src/@assets/landing/js/plugin/jquery-nice-select.min.js";
// import "../src/@assets/landing/js/plugin/wow.min.js";
// import "../src/@assets/landing/js/main.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { me } from "app/crud/auth/me";
import { useDispatch } from "react-redux";
import { actionMe } from "app/redux/auth/actions/action_me";
import { ToastContainer } from "react-toastify";
import { actionLogout } from "app/redux/auth/actions/action_logout";

dayjs.extend(localizedFormat);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const asyncGetMe = async () => {
      try {
        const { data } = await me();
        const { userId, firstName, lastName, email, roles, companyLogoURL } =
          data ?? {};
        // console.log(data)
        dispatch(
          actionMe(userId, firstName, lastName, roles, email, companyLogoURL),
        );
      } catch (e) {
        dispatch(actionLogout());
      }
    };
    // noinspection JSIgnoredPromiseFromCall
    asyncGetMe();
  });

  return (
    // <SignalRProvider>
    <QueryClientProvider client={queryClient}>
      <Router />
      <ToastContainer />
    </QueryClientProvider>
    // </SignalRProvider>
  );
};

export default App;
