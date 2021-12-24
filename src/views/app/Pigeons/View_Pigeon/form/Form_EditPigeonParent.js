import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updatePigeon} from "app/crud/app/pigeons/updatePigeon";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import {Button} from "reactstrap";
import {InputMalePigeon} from "components/form/predefined/select/enum/Input_MalePigeon";
import {InputFemalePigeon} from "components/form/predefined/select/enum/Input_FemalePigeon";
import {toast} from "react-toastify";
import {pigeonSchema} from "views/app/Pigeons/common/form/PigeonForm";

export const FormEditPigeonParent = ({
                                       isMother, closeModal = () => {
  }
                                     }) => {
  const {pigeonId} = useParams();
  const history = useHistory();
  const {data, refetch} = useQueryContext();

  const methods = useForm({
    defaultValues: {
      ...pigeonSchema.default(),
      ...data,
      status: data?.status?.id,
      pigeonEyeColorId: data?.eyeColor?.id,
      pigeonColorId: data?.color?.id,
      gender: data?.gender?.id,
      fatherId: data?.father?.id,
      motherId: data?.mother?.id,
      dovecoteId: data?.dovecote?.id
    },
    resolver: yupResolver(pigeonSchema),
  });

  // console.log(pigeonSchema.default(), data)

  const handleSuccess = ({data}) => {
    //redirect to employee
    refetch();
    closeModal();
  };

  const handleError = () => {
    toast.error("Zmiana rodzica nie powiodła się.")
  }

  const mutation = useHookFormMutation(methods, updatePigeon(pigeonId), {
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
              {!isMother ? (
                <InputMalePigeon
                  name="fatherId"
                />) : (
                <InputFemalePigeon
                  name="motherId"
                />
              )
              }
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
