import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { createOrder } from "app/crud/app/orders/createOrder";
import {orderSchema, FormOrder} from "views/app/Orders/common/form/OrderForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useParams} from "react-router-dom";
import * as yup from "yup";

const breadcrumbItems = [
  { label: "Lista zamówień", url: route["app.orders"] },
  { label: "Dodaj zamówienie" },
];

const ViewOrderAdd = () => {
  // const {warehouseId} = useParams();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...orderSchema.default(), items: [{name: "", productId: "", quantity: "", price: ""}]},
    resolver: yupResolver(orderSchema),
  });

  // realizationDate,isDelivery,buyer,phoneNumber,deliveryAddress,

  const handleSuccess = ({data}) => {
    history.push(data?.id ? route['app.order'](data.orderId) : route['app.orders']);
  }

  const mutation = useHookFormMutation(methods, createOrder, {handleSuccess});

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
                <h4>Dodaj zamówienie</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormOrder
                      submitText="Dodaj"
                      cancelUrl={route['app.orders']}
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

export default ViewOrderAdd;
