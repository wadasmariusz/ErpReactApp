import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { route } from "app/router/urls/routes";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormPigeon,
  pigeonSchema,
} from "views/app/Pigeons/common/form/PigeonForm";
import { useHookFormMutation } from "app/hooks/crud/useHookFormMutation";
import { updatePigeon } from "app/crud/app/pigeons/updatePigeon";
import { HookFormError } from "components/form/helpers/HookFormError";
import { useQueryContext } from "app/context/data/queries/QueryProvider";

const breadcrumbItems = [
  { label: "Lista gołębi", url: route["app.pigeons"] },
  { label: "Edycja gołębia" },
];

export const FormEditPigeon = () => {
  const { pigeonId } = useParams();
  const history = useHistory();
  const { data } = useQueryContext();

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

  const handleSuccess = ({ data }) => {
    //redirect to employee
    history.push(route["app.pigeon"](pigeonId));
  };

  const mutation = useHookFormMutation(methods, updatePigeon(pigeonId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError />
          <FormPigeon
            submitText="Zapisz"
            cancelUrl={route["app.pigeon"](pigeonId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
