import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {interWarehouseTransferSchema, FormInterWarehouseTransfer,} from "views/app/InterWarehouseTransfers/common/form/InterWarehouseTransferForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateInterWarehouseTransfer} from "app/crud/app/interWarehouseTransfers/updateInterWarehouseTransfer";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditInterWarehouseTransfer = () => {
  const {interWarehouseTransferId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...interWarehouseTransferSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(interWarehouseTransferSchema),
  });

  // console.log(interWarehouseTransferSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.interWarehouseTransfer"](interWarehouseTransferId));
  };

  const mutation = useHookFormMutation(methods, updateInterWarehouseTransfer(interWarehouseTransferId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormInterWarehouseTransfer
            submitText="Zapisz"
            cancelUrl={route["app.interWarehouseTransfer"](interWarehouseTransferId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
