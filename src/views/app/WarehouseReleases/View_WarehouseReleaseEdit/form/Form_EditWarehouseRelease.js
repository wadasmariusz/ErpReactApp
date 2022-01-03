import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {warehouseReleaseSchema, FormWarehouseRelease,} from "views/app/WarehouseReleases/common/form/WarehouseReleaseForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateWarehouseRelease} from "app/crud/app/warehouseReleases/updateWarehouseRelease";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditWarehouseRelease = () => {
  const {warehouseReleaseId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...warehouseReleaseSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(warehouseReleaseSchema),
  });

  // console.log(warehouseReleaseSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.warehouseRelease"](warehouseReleaseId));
  };

  const mutation = useHookFormMutation(methods, updateWarehouseRelease(warehouseReleaseId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormWarehouseRelease
            submitText="Zapisz"
            cancelUrl={route["app.warehouseRelease"](warehouseReleaseId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
