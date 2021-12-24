import React from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputText } from "components/form/text/Text/Input_Text";
import { Envelope, Lock } from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { InputSubmit } from "components/form/special/Submit/Input_Submit";
import { useHookFormMutation } from "app/hooks/crud/useHookFormMutation";
import { login } from "app/crud/auth/login";
import { actionLogin } from "app/redux/auth/actions/action_login";
import { useDispatch } from "react-redux";
import { HookFormError } from "components/form/helpers/HookFormError";
import { yupResolver } from "@hookform/resolvers/yup";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const FormLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSuccess = ({ data }) => {
    console.log(data);
    const userId = data?.userId;
    const token = data?.accessToken;
    const firstName = data?.firstName;
    const lastName = data?.lastName;
    const userEmail = data?.email;
    const userRoles = data?.roles;
    dispatch(actionLogin(token, { userId, firstName, lastName, userRoles, userEmail }));
    history.push(route["app.dashboard"]);
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  });

  const mutation = useHookFormMutation(methods, login, { handleSuccess });
  // console.log({...methods.formState})

  return (
    <FormProvider {...methods}>
      <form method="POST" onSubmit={mutation.mutate}>
        <div className="row">
          <div className="col-12 pt-25">
            <InputText
              required
              name="email"
              type="email"
              icon={<Envelope size={SIZE_INPUT_ICON} />}
              label="Login"
            />
          </div>
          <div className="col-12 pt-25">
            <InputText
              required
              name="password"
              type="password"
              icon={<Lock size={SIZE_INPUT_ICON} />}
              label="Hasło"
            />
          </div>
          <div className="col-12">
            <HookFormError />
          </div>
          <div className="col-12 mt-50 text-right">
            <InputSubmit value="Logowanie" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
