import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { createInterWarehouseReceipt } from "app/crud/app/interWarehouseReceipts/createInterWarehouseReceipt";
import {interWarehouseReceiptSchema, FormInterWarehouseReceipt} from "views/app/InterWarehouseReceipts/common/form/InterWarehouseReceiptForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useParams} from "react-router-dom";

const breadcrumbItems = [
  { label: "Lista przyjęć wewnętrznych", url: route["app.interWarehouseReceipts"] },
  { label: "Dodaj PW" },
];

const ViewInterWarehouseReceiptAdd = () => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...interWarehouseReceiptSchema.default(), warehouseId, items: [{productId: "", quantity: "", shelfId: ""}]},
    resolver: yupResolver(interWarehouseReceiptSchema),
  });

  const handleSuccess = ({data}) => {
    history.push(data?.id ? route['app.interWarehouseReceipt'](data.interWarehouseReceiptId) : route['app.interWarehouseReceipts']);
  }

  const mutation = useHookFormMutation(methods, createInterWarehouseReceipt, {handleSuccess});

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
                <h4>Dodaj przyjęcie wewnętrzne</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormInterWarehouseReceipt
                      defaultWarehouseId = {warehouseId}
                      submitText="Dodaj"
                      cancelUrl={route['app.interWarehouseReceipts']}
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

export default ViewInterWarehouseReceiptAdd;
