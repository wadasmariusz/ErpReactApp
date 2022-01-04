import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createUser } from "app/crud/app/users/createUser";
import {userSchema, FormUser} from "views/app/Users/common/form/UserForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista użytkowników", url: route["app.users"] },
  { label: "Dodaj użytkownika" },
];

const ViewUserAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: userSchema.default(),
    resolver: yupResolver(userSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.user'](data.userId) : route['app.users']);
  }

  const mutation = useHookFormMutation(methods, createUser, {handleSuccess});

  const onError = () => {
    console.log("ERROR");
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4>Dodaj użytkownika</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormUser
                      submitText="Dodaj"
                      cancelUrl={route['app.users']}
                    />
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserAdd;
