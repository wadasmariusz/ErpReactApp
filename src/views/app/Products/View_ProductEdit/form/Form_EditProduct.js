import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productSchema, FormProduct,} from "views/app/Products/common/form/ProductForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateProduct} from "app/crud/app/products/updateProduct";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditProduct = () => {
  const {productId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...productSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(productSchema),
  });

  // console.log(productSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.product"](productId));
  };

  const mutation = useHookFormMutation(methods, updateProduct(productId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormProduct
            submitText="Zapisz"
            cancelUrl={route["app.product"](productId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
