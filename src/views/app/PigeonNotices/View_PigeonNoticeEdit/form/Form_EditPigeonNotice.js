import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormPigeonNotice, pigeonNoticeSchema,} from "views/app/PigeonNotices/common/form/PigeonNoticeForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updatePigeonNotice} from "app/crud/app/pigeonNotices/updatePigeonNotice";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditPigeonNotice = () => {
  const {pigeonNoticeId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();


  const methods = useForm({
    defaultValues: {
      ...pigeonNoticeSchema.default(),
      ...data,
      pigeonId: data?.pigeon?.id,
      status: data?.status?.id,
    },
    resolver: yupResolver(pigeonNoticeSchema),
  });

  // console.log(pigeonNoticeSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.pigeonNotice"](pigeonNoticeId));
  };

  const mutation = useHookFormMutation(methods, updatePigeonNotice(pigeonNoticeId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormPigeonNotice
            submitText="Zapisz"
            cancelUrl={route["app.pigeonNotice"](pigeonNoticeId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
