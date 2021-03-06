import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import {Button} from "reactstrap";
import {toast} from "react-toastify";
import {removeWarehouseAccess} from "app/crud/app/users/removeWarehouseAccess";


export const FormRemoveWarehouseAccess = ({ closeModal = () => {}, warehouseId}) => {
  const {userId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
    },
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Nie powiodło się usuwanie dostępu.")
  }

  const mutation = useHookFormMutation(methods, removeWarehouseAccess(userId, warehouseId), {
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
