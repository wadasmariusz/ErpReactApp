import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {warehouseShelfSchema, FormWarehouseShelf,} from "views/app/Shelves/common/forms/WarehouseShelfForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateWarehouseShelf} from "app/crud/app/shelves/updateWarehouseShelf";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditShelf = () => {
  const {warehouseId, shelfId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...warehouseShelfSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(warehouseShelfSchema),
  });

  // console.log(warehouseShelfSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.warehouse"](warehouseId));
  };

  const mutation = useHookFormMutation(methods, updateWarehouseShelf(warehouseId, shelfId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormWarehouseShelf
            submitText="Zapisz"
            cancelUrl={route["app.warehouse"](warehouseId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
