import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createProductKind } from "app/crud/app/productKinds/createProductKind";
import {productKindSchema, FormProductKind} from "views/app/ProductKinds/common/form/ProductKindForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista rodzajów produktów", url: route["app.productKinds"] },
  { label: "Dodaj rodzaj produktu" },
];

const ViewProductKindAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: productKindSchema.default(),
    resolver: yupResolver(productKindSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.productKind'](data.productKindId) : route['app.productKinds']);
  }

  const mutation = useHookFormMutation(methods, createProductKind, {handleSuccess});

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
                <h4>Dodaj rodzaj produktu</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormProductKind
                      submitText="Dodaj"
                      cancelUrl={route['app.productKinds']}
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

export default ViewProductKindAdd;
