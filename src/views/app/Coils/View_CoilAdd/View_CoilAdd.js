import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createCoil } from "app/crud/app/coils/createCoil";
import {coilSchema, FormCoil} from "views/app/Coils/common/form/CoilForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista kregów", url: route["app.coils"] },
  { label: "Dodaj krąg" },
];

const ViewCoilAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: coilSchema.default(),
    resolver: yupResolver(coilSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.coil'](data.productId) : route['app.coils']);
  }

  const mutation = useHookFormMutation(methods, createCoil, {handleSuccess});

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
                <h4>Dodaj krąg</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormCoil
                      submitText="Dodaj"
                      cancelUrl={route['app.coils']}
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

export default ViewCoilAdd;
