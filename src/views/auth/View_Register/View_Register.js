import React, { useState } from "react";
import { AuthLayout } from "layouts/AuthLayout";
import { Link } from "react-router-dom";
import { route } from "app/router/urls/routes";
import { ApiErrors } from "components/api/ApiErrors";
import Helmet from "components/includes/Helmet";
import { defaultTitle } from "app/config/metaTags";
import chatBgBackup from "@assets/img/pages/graphic-1.png";
import logo from "@assets/img/logo/logo-black.png";
import { FormRegister } from "./form/Form_Register";

const ViewRegister = () => {
  const [error] = useState(null);

  return (
    <AuthLayout image={chatBgBackup}>
      <Helmet title={defaultTitle("Rejestracja")} />
      <div className="d-flex align-items-center justify-content-between">
        <h4>Rejestracja</h4>
        <div>
          <img src={logo} style={{ height: "35px" }} alt="" />
        </div>
      </div>
      <ApiErrors error={error} />
      <FormRegister />
      <div className="text-center pt-2 small">
        Masz już konto?
        <Link to={route["auth.login"]} className="ml-25">
          Zaloguj się
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ViewRegister;
