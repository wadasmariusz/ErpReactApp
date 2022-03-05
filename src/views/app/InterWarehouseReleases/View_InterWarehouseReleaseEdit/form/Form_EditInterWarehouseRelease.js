import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {interWarehouseReleaseSchema, FormInterWarehouseRelease,} from "views/app/InterWarehouseReleases/common/form/InterWarehouseReleaseForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateInterWarehouseRelease} from "app/crud/app/interWarehouseReleases/updateInterWarehouseRelease";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditInterWarehouseRelease = () => {
  const {interWarehouseReleaseId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...interWarehouseReleaseSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(interWarehouseReleaseSchema),
  });

  // console.log(interWarehouseReleaseSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.interWarehouseRelease"](interWarehouseReleaseId));
  };

  const mutation = useHookFormMutation(methods, updateInterWarehouseRelease(interWarehouseReleaseId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormInterWarehouseRelease
            isUpdate={true}
            submitText="Zapisz"
            cancelUrl={route["app.interWarehouseRelease"](interWarehouseReleaseId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
