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
import {productKindSchema} from "views/app/Products/common/form/ProductKindForm";
import {InputProductKind} from "../../../../../components/form/predefined/select/enum/Input_ProductKind";
import {assignProductKind} from "../../../../../app/crud/app/products/assignProductKind";

export const FormEditProductKind = ({
                                          closeModal = () => {
                                          }
                                        }) => {
  const {productId} = useParams();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...productKindSchema.default(),
      ...data,
      productKindId: data?.productKind?.id
    },
    resolver: yupResolver(productKindSchema),
  });

  // console.log(productSchema.default(), data)

  const handleSuccess = () => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Zmiana rodzaju nie powiodła się.")
  }

  const mutation = useHookFormMutation(methods, assignProductKind(productId), {
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
              <InputProductKind/>
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
