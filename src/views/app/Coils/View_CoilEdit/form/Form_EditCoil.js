import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {coilSchema, FormCoil,} from "views/app/Coils/common/form/CoilForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateCoil} from "app/crud/app/coils/updateCoil";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditCoil = () => {
  const {productId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...coilSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(coilSchema),
  });

  // console.log(coilSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.coil"](productId));
  };

  const mutation = useHookFormMutation(methods, updateCoil(productId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormCoil
            submitText="Zapisz"
            cancelUrl={route["app.coil"](productId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
