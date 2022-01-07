import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productCategorySchema, FormProductCategory,} from "views/app/ProductCategories/common/form/ProductCategoryForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateProductCategory} from "app/crud/app/productCategories/updateProductCategory";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditProductCategory = () => {
  const {productCategoryId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...productCategorySchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(productCategorySchema),
  });

  // console.log(productCategorySchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.productCategory"](productCategoryId));
  };

  const mutation = useHookFormMutation(methods, updateProductCategory(productCategoryId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormProductCategory
            submitText="Zapisz"
            cancelUrl={route["app.productCategory"](productCategoryId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
