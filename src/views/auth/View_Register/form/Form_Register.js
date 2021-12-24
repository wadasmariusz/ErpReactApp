import React from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { InputText } from "components/form/text/Text/Input_Text";
import { Envelope, Lock, Person } from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { InputSubmit } from "components/form/special/Submit/Input_Submit";
import { useHookFormMutation } from "app/hooks/crud/useHookFormMutation";
import { register } from "app/crud/auth/register";
import { InputCheckbox } from "components/form/special/Checkbox/Input_Checkbox";
import { useDispatch } from "react-redux";
import { actionLogin } from "app/redux/auth/actions/action_login";
import { HookFormError } from "components/form/helpers/HookFormError";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  marketingAccepted: yup.bool().default(false),
});

export const FormRegister = () => {
  const dispatch = useDispatch();
  const handleSuccess = ({ data }) => {
    const firstName = data?.firstName;
    const lastName = data?.lastName;
    const token = data?.token;
    const userEmail = data?.email;
    const userId = data?.id;
    const userRoles = data?.roles;

    dispatch(actionLogin(token, { userId, firstName, lastName, userRoles, userEmail }));
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.default(),
  });

  const mutation = useHookFormMutation(methods, register, { handleSuccess });
  console.log(methods.getValues());
  return (
    <FormProvider {...methods}>
      <form onSubmit={mutation.mutate}>
        <div className="row pt-2">
          <div className="col-12 pt-25">
            <InputText
              required
              name="email"
              type="email"
              icon={<Envelope size={SIZE_INPUT_ICON} />}
              label="Email"
            />
          </div>
          <div className="col-12 pt-25">
            <InputText
              required
              name="firstName"
              type="text"
              icon={<Person size={SIZE_INPUT_ICON} />}
              label="Imię"
            />
          </div>
          <div className="col-12 pt-25">
            <InputText
              required
              name="lastName"
              type="text"
              icon={<Person size={SIZE_INPUT_ICON} />}
              label="Nazwisko"
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
          <div className="col-12 pt-25">
            <InputText
              required
              name="confirmPassword"
              type="password"
              icon={<Lock size={SIZE_INPUT_ICON} />}
              label="Powtórz hasło"
            />
          </div>
          <div className="col-12 pt-25">
            <InputCheckbox
              name="marketingAccepted"
              label="Akceptacja regulaminu"
            />
          </div>
          <div className="col-12">
            <HookFormError />
          </div>
          <div className="col-12 mt-50 text-right">
            <InputSubmit value="Rejestracja" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
