import React, {useState} from 'react';
import {ApiErrors} from "components/api/ApiErrors";
import {Link} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {AuthLayout} from "layouts/AuthLayout";

const ViewPasswordReset = () => {

  const [ error ] = useState(null);

  return (
    <AuthLayout image="">
      <div className="d-flex align-items-center justify-content-between mb-50">
        <h4>Przywracanie hasła</h4>
        (LOGO)
      </div>
      <ApiErrors error={error}/>

      <div className="text-right mt-75 small">
        <Link to={route['auth.login']}>
          Logowanie
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ViewPasswordReset;
