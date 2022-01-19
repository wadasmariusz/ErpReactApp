import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {orderSchema, FormOrder,} from "views/app/Orders/common/form/OrderForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateOrder} from "app/crud/app/orders/updateOrder";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditOrder = () => {
  const {orderId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...orderSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(orderSchema),
  });

  // console.log(orderSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.order"](orderId));
  };

  const mutation = useHookFormMutation(methods, updateOrder(orderId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormOrder
            isUpdate={true}
            submitText="Zapisz"
            cancelUrl={route["app.order"](orderId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
