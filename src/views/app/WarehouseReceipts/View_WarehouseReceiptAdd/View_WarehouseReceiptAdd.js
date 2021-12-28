import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createWarehouseReceipt } from "app/crud/app/warehouseReceipts/createWarehouseReceipt";
import {warehouseReceiptSchema, FormWarehouseReceipt} from "views/app/WarehouseReceipts/common/form/WarehouseReceiptForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista przyjęć magazynowych", url: route["app.warehouseReceipts"] },
  { label: "Dodaj PM" },
];

const ViewWarehouseReceiptAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: warehouseReceiptSchema.default(),
    resolver: yupResolver(warehouseReceiptSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.warehouseReceipt'](data.warehouseReceiptId) : route['app.warehouseReceipts']);
  }

  const mutation = useHookFormMutation(methods, createWarehouseReceipt, {handleSuccess});

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
                    <FormWarehouseReceipt
                      submitText="Dodaj"
                      cancelUrl={route['app.warehouseReceipts']}
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

export default ViewWarehouseReceiptAdd;
