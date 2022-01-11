import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { createWarehouseRelease } from "app/crud/app/warehouseReleases/createWarehouseRelease";
import {warehouseReleaseSchema, FormWarehouseRelease} from "views/app/WarehouseReleases/common/form/WarehouseReleaseForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useParams} from "react-router-dom";

const breadcrumbItems = [
  { label: "Lista wydań magazynowych", url: route["app.warehouseReleases"] },
  { label: "Dodaj WM" },
];

const ViewWarehouseReleaseAdd = () => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...warehouseReleaseSchema.default(), warehouseId, items: [{productId: "", quantity: "", shelfId: ""}]},
    resolver: yupResolver(warehouseReleaseSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.warehouseRelease'](data.warehouseReleaseId) : route['app.warehouseReleases']);
  }

  const mutation = useHookFormMutation(methods, createWarehouseRelease, {handleSuccess});

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
                <h4>Dodaj wydanie magazynowe</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormWarehouseRelease
                      defaultWarehouseId = {warehouseId}
                      submitText="Dodaj"
                      cancelUrl={route['app.warehouseReleases']}
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

export default ViewWarehouseReleaseAdd;
