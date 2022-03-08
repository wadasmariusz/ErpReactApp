import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createInterWarehouseTransfer } from "app/crud/app/interWarehouseTransfers/createInterWarehouseTransfer";
import {interWarehouseTransferSchema, FormInterWarehouseTransfer} from "views/app/InterWarehouseTransfers/common/form/InterWarehouseTransferForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista przesunięć międzymagazynowych", url: route["app.interWarehouseTransfers"] },
  { label: "Dodaj MM" },
];

const ViewInterWarehouseTransferAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...interWarehouseTransferSchema.default(), items: [{productId: "", quantity: "", shelfId: ""}]},
    resolver: yupResolver(interWarehouseTransferSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.interWarehouseTransfer'](data.interWarehouseTransferId) : route['app.interWarehouseTransfers']);
  }

  const mutation = useHookFormMutation(methods, createInterWarehouseTransfer, {handleSuccess});

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
                <h4>Dodaj przesunięcie międzymagazynowe</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormInterWarehouseTransfer
                      submitText="Dodaj"
                      cancelUrl={route['app.interWarehouseTransfers']}
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

export default ViewInterWarehouseTransferAdd;
