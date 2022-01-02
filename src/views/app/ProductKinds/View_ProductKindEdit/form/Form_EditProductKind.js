import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productKindSchema, FormProductKind,} from "views/app/ProductKinds/common/form/ProductKindForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateProductKind} from "app/crud/app/productKinds/updateProductKind";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditProductKind = () => {
  const {productKindId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...productKindSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(productKindSchema),
  });

  // console.log(productKindSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.productKind"](productKindId));
  };

  const mutation = useHookFormMutation(methods, updateProductKind(productKindId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormProductKind
            submitText="Zapisz"
            cancelUrl={route["app.productKind"](productKindId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
