import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSchema, FormUser,} from "views/app/Users/common/form/UserForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateUser} from "app/crud/app/users/updateUser";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditUser = () => {
  const {userId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...userSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(userSchema),
  });

  // console.log(userSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.user"](userId));
  };

  const mutation = useHookFormMutation(methods, updateUser(userId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormUser
            submitText="Zapisz"
            cancelUrl={route["app.user"](userId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
