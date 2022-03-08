import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {productionSheetSchema, FormProductionSheet,} from "views/app/ProductionSheets/common/form/ProductionSheetForm";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {updateProductionSheet} from "app/crud/app/productionSheets/updateProductionSheet";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const FormEditProductionSheet = () => {
  const {productionSheetId} = useParams();
  const history = useHistory();
  const {data} = useQueryContext();

  console.log(data);

  const methods = useForm({
    defaultValues: {
      ...productionSheetSchema.default(),
      ...data,
      type: data?.type?.id,
    },
    resolver: yupResolver(productionSheetSchema),
  });

  // console.log(productionSheetSchema.default(), data);

  const handleSuccess = ({data}) => {
    //redirect to employee
    history.push(route["app.productionSheet"](productionSheetId));
  };

  const mutation = useHookFormMutation(methods, updateProductionSheet(productionSheetId), {
    handleSuccess,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={mutation.mutate}>
          <HookFormError/>
          <FormProductionSheet
            isUpdate={true}
            submitText="Zapisz"
            cancelUrl={route["app.productionSheet"](productionSheetId)}
          />
        </form>
      </FormProvider>
    </>
  );
};
