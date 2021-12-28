import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {warehouseReceiptSchema, FormWarehouseReceipt,} from "views/app/WarehouseReceipts/common/form/WarehouseReceiptForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateWarehouseReceipt} from "app/crud/app/warehouseReceipts/updateWarehouseReceipt";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditWarehouseReceipt = () => {
  const {warehouseReceiptId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...warehouseReceiptSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(warehouseReceiptSchema),
  });

  // console.log(warehouseReceiptSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.warehouseReceipt"](warehouseReceiptId));
  };

  const mutation = useHookFormMutation(methods, updateWarehouseReceipt(warehouseReceiptId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormWarehouseReceipt
            submitText="Zapisz"
            cancelUrl={route["app.warehouseReceipt"](warehouseReceiptId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
