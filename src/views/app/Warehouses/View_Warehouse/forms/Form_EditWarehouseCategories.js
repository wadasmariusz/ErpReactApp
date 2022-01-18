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
import {warehouseCategoriesSchema} from "views/app/Warehouses/common/form/WarehouseCategoriesForm";
import {InputWarehouseCategories} from "../../../../../components/form/predefined/select/enum/Input_WarehouseCategories";
import {assignWarehouseCategories} from "../../../../../app/crud/app/warehouses/assignWarehouseCategories";

export const FormEditWarehouseCategories = ({
                                            closeModal = () => {
                                            }
                                          }) => {
  const {warehouseId} = useParams();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...warehouseCategoriesSchema.default(),
      productCategoriesId: data?.categories?.map(c => ({
        value: c.id
      }))
    },
    resolver: yupResolver(warehouseCategoriesSchema),
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = () => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Zmiana kategori nie powiodła się.")
  }

  const mutation = useHookFormMutation(methods, assignWarehouseCategories(warehouseId), {
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
              <InputWarehouseCategories/>
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
