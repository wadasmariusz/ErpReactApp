import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {interWarehouseReceiptSchema, FormInterWarehouseReceipt,} from "views/app/InterWarehouseReceipts/common/form/InterWarehouseReceiptForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateInterWarehouseReceipt} from "app/crud/app/interWarehouseReceipts/updateInterWarehouseReceipt";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditInterWarehouseReceipt = () => {
  const {interWarehouseReceiptId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...interWarehouseReceiptSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(interWarehouseReceiptSchema),
  });

  // console.log(interWarehouseReceiptSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.interWarehouseReceipt"](interWarehouseReceiptId));
  };

  const mutation = useHookFormMutation(methods, updateInterWarehouseReceipt(interWarehouseReceiptId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormInterWarehouseReceipt
            isUpdate={true}
            submitText="Zapisz"
            cancelUrl={route["app.interWarehouseReceipt"](interWarehouseReceiptId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
