import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {warehouseSchema, FormWarehouse,} from "views/app/Warehouses/common/form/WarehouseForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateWarehouse} from "app/crud/app/warehouses/updateWarehouse";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditWarehouse = () => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...warehouseSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(warehouseSchema),
  });

  // console.log(warehouseSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.warehouse"](warehouseId));
  };

  const mutation = useHookFormMutation(methods, updateWarehouse(warehouseId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormWarehouse
            submitText="Zapisz"
            cancelUrl={route["app.warehouse"](warehouseId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
