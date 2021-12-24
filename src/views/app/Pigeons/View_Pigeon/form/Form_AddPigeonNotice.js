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
import {pigeonNoticeSchema} from "views/app/PigeonNotices/common/form/PigeonNoticeForm";
import {InputText} from "components/form/text/Text/Input_Text";
import {CurrencyDollar} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {createPigeonNotice} from "app/crud/app/pigeonNotices/createPigeonNotice";


export const FormAddPigeonNotice = ({
                                      closeModal = () => {
                                      }
                                    }) => {
  const {pigeonId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...pigeonNoticeSchema.default(),
      pigeonId: pigeonId
    },
    resolver: yupResolver(pigeonNoticeSchema),
  });

  // console.log(pigeonSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    closeModal();
  };

  const handleError = () => {
    toast.error("Wystawienie na giełdę nie powiodło się.")
  }

  const mutation = useHookFormMutation(methods, createPigeonNotice, {
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
