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
import {confirmInterWarehouseRelease} from "app/crud/app/interWarehouseReleases/confirmInterWarehouseRelease";
import {Pen, Tag} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../../app/config/sizes";


export const FormConfirmInterWarehouseRelease = ({
                                              closeModal = () => {
                                              }
                                            }) => {
  const {interWarehouseReleaseId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      interWarehouseReleaseId: interWarehouseReleaseId
    },
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Potwierdzenie dokumentu nie powiodło się.")
  }

  const mutation = useHookFormMutation(methods, confirmInterWarehouseRelease(interWarehouseReleaseId), {
    handleSuccess,
    handleError
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <div className="row">
            <div className="col-12 py-2">
              <h4>Po zatwierdzeniu dokumentu nie będzie możliwe wprowadzanie zmian.</h4>
              <h4>Czy na pewno chcesz potwierdzić dokument?</h4>
            </div>
          </div>
          <HookFormError/>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <Button onClick={closeModal} color="secondary">Anuluj</Button>
              <InputSubmit value={"Potwierdź"} className="ml-25"/>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
