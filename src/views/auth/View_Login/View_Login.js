import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "layouts/AuthLayout";
import { route } from "app/router/urls/routes";
import Helmet from "components/includes/Helmet";
import { defaultTitle } from "app/config/metaTags";
import chatBgBackup from "@assets/img/pages/graphic-1.png";
import logo from "@assets/img/logo/logo-black.png";
import { FormLogin } from "views/auth/View_Login/form/Form_Login";

const ViewLogin = () => {
  return (
    <AuthLayout image={chatBgBackup}>
      <Helmet title={defaultTitle("Logowanie")} />
      <div className="d-flex align-items-center justify-content-between mb-50">
        <h4>Logowanie</h4>
        <div>
          <img src={logo} style={{ height: "35px" }} alt="" />
        </div>
      </div>
      <FormLogin />
      {/*<div className="text-center pt-2 small">*/}
      {/*  Nie masz jeszcze konta?*/}
      {/*  <Link to={route["auth.register"]} className="ml-25">*/}
      {/*    Zarejestruj się*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </AuthLayout>
  );
};

export default ViewLogin;
