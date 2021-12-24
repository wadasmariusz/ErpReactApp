import React, {useState} from 'react';
import {AuthLayout} from "layouts/AuthLayout";
import {Link} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {ApiErrors} from "components/api/ApiErrors";


const ViewPasswordForgot = () => {

  const [ error ] = useState(null);

  return (
    <AuthLayout image="">
      <div className="d-flex align-items-center justify-content-between mb-50">
        <h4>Przywracanie hasła</h4>
        <div>
          (LOGO)
        </div>
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

export default ViewPasswordForgot;
