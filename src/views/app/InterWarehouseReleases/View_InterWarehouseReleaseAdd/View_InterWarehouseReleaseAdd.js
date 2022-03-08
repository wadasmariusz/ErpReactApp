import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { createInterWarehouseRelease } from "app/crud/app/interWarehouseReleases/createInterWarehouseRelease";
import {interWarehouseReleaseSchema, FormInterWarehouseRelease} from "views/app/InterWarehouseReleases/common/form/InterWarehouseReleaseForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";
import {useParams} from "react-router-dom";

const breadcrumbItems = [
  { label: "Lista rozchodów wewnętrznych", url: route["app.interWarehouseReleases"] },
  { label: "Dodaj RW" },
];

const ViewInterWarehouseReleaseAdd = () => {
  const {warehouseId} = useParams();
  const history = useHistory();
  const methods = useForm({
    defaultValues: {...interWarehouseReleaseSchema.default(), warehouseId, items: [{productId: "", quantity: "", shelfId: ""}]},
    resolver: yupResolver(interWarehouseReleaseSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.interWarehouseRelease'](data.interWarehouseReleaseId) : route['app.interWarehouseReleases']);
  }

  const mutation = useHookFormMutation(methods, createInterWarehouseRelease, {handleSuccess});

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
                <h4>Dodaj rozchód wewnętrzny</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormInterWarehouseRelease
                      defaultWarehouseId = {warehouseId}
                      submitText="Dodaj"
                      cancelUrl={route['app.interWarehouseReleases']}
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

export default ViewInterWarehouseReleaseAdd;
