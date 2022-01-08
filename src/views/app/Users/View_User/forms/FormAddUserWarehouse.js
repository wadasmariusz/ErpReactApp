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
import {createUserWarehouse} from "app/crud/app/users/createUserWarehouse";
import {InputWarehouse} from "../../../../../components/form/predefined/select/enum/Input_Warehouse";
import {userWarehouseSchema} from "../../common/form/UserWarehouseForm";
import {SIZE_INPUT_ICON_SM} from "../../../../../app/config/sizes";
import {InputMultipleWarehouse} from "../../../../../components/form/predefined/select/enum/InputMultipleWarehouse";


export const FormAddUserWarehouse = ( {closeModal = () => { } }) => {
  const {userId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...userWarehouseSchema.default(),
      userId: userId
    },
    resolver: yupResolver(userWarehouseSchema),
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Dodawanie dostępu do magazynu nie powiodło się.")
  }

  const mutation = useHookFormMutation(methods, createUserWarehouse(userId), {
    handleSuccess,
    handleError
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <div className="row">
            <div className="col-12 col-lg-12 pt-25">
              <InputMultipleWarehouse
                userId = {userId}
              />
            </div>
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
