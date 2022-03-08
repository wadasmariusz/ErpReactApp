import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import {Button} from "reactstrap";
import {toast} from "react-toastify";
import {canceledProductionSheet} from "app/crud/app/productionSheets/canceledProductionSheet";
import {Pen, Tag} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../../app/config/sizes";


export const FormCanceledProductionSheet = ({
                                               closeModal = () => {
                                               }
                                             }) => {
  const {productionSheetId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      productionSheetId: productionSheetId
    },
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Anulowanie dokumentu nie powiodło się.")
  }

  const mutation = useHookFormMutation(methods, canceledProductionSheet(productionSheetId), {
    handleSuccess,
    handleError
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <Button onClick={closeModal} color="secondary">Anuluj</Button>
              <InputSubmit value={"OK"} className="ml-25"/>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
