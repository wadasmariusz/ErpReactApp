import React from "react";
import {useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import {Button} from "reactstrap";
import {toast} from "react-toastify";
import {productCategoriesSchema} from "views/app/Products/common/form/ProductCategoriesForm";
import {InputProductCategories} from "../../../../../components/form/predefined/select/enum/Input_ProductCategories";
import {assignProductCategories} from "../../../../../app/crud/app/products/assignProductCategories";

export const FormEditProductCategories = ({
                                      closeModal = () => {
                                      }
                                    }) => {
  const {productId} = useParams();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...productCategoriesSchema.default(),
      productCategoriesId: data?.categories?.map(c => ({
        value: c.id
      }))
    },
    resolver: yupResolver(productCategoriesSchema),
  });

  // console.log(productSchema.default(), data)

  const handleSuccess = () => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Zmiana kategori nie powiodła się.")
  }

  const mutation = useHookFormMutation(methods, assignProductCategories(productId), {
    handleSuccess,
    handleError
  });

  return (
    <>
      <FormProvider {...methods}>

        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <div className="row">
            <div className="col-12 pt-25">
              <InputProductCategories/>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <Button onClick={closeModal} color="secondary">Anuluj</Button>
              <InputSubmit value={"Zapisz"} className="ml-25"/>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
