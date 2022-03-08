import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { createProductionSheet } from "app/crud/app/productionSheets/createProductionSheet";
import {productionSheetSchema, FormProductionSheet} from "views/app/ProductionSheets/common/form/ProductionSheetForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useParams} from "react-router-dom";

const breadcrumbItems = [
  { label: "Lista operacji cięcia", url: route["app.productionSheets"] },
  { label: "Dodaj CK" },
];

const ViewProductionSheetAdd = () => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...productionSheetSchema.default(), warehouseId, items: [{productId: "", quantity: "", shelfId: ""}]},
    resolver: yupResolver(productionSheetSchema),
  });

  const handleSuccess = ({data}) => {
    history.push(data?.id ? route['app.productionSheet'](data.productionSheetId) : route['app.productionSheets']);
  }

  const mutation = useHookFormMutation(methods, createProductionSheet, {handleSuccess});

  const onError = () => {
    console.log("ERROR");
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4>Dodaj operacje cięcia</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormProductionSheet
                      defaultWarehouseId = {warehouseId}
                      submitText="Dodaj"
                      cancelUrl={route['app.productionSheets']}
                    />
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductionSheetAdd;
