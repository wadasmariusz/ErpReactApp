import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createWarehouse } from "app/crud/app/warehouses/createWarehouse";
import {warehouseSchema, FormWarehouse} from "views/app/Warehouses/common/form/WarehouseForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista magazynów", url: route["app.warehouses"] },
  { label: "Dodaj magazyn" },
];

const ViewWarehouseAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: warehouseSchema.default(),
    resolver: yupResolver(warehouseSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.warehouse'](data.warehouseId) : route['app.warehouses']);
  }

  const mutation = useHookFormMutation(methods, createWarehouse, {handleSuccess});

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
                <h4>Dodaj magazyn</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormWarehouse
                      submitText="Dodaj"
                      cancelUrl={route['app.warehouses']}
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

export default ViewWarehouseAdd;
