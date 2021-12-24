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
import {warehouseShelfSchema} from "views/app/Shelves/common/forms/WarehouseShelfForm";
import {InputText} from "components/form/text/Text/Input_Text";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {createWarehouseShelf} from "app/crud/app/shelves/createWarehouseShelf";


export const FormAddWarehouseShelf = ({
                                        closeModal = () => {
                                        }
                                      }) => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...warehouseShelfSchema.default(),
      warehouseId: warehouseId
    },
    resolver: yupResolver(warehouseShelfSchema),
  });

  // console.log(warehouseSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    closeModal();
  };

  const handleError = () => {
    toast.error("Dodawanie półek do magazynu nie powiodło się.")
  }

  const mutation = useHookFormMutation(methods, createWarehouseShelf, {
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
              <div className="col-12 pt-25">
                <InputText
                  name="price"
                  icon={<CurrencyDollar size={SIZE_INPUT_ICON}/>}
                  label="Cena"
                />
              </div>
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
