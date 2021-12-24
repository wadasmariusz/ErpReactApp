import React from "react";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useHistory} from "react-router";
import {createPigeonNotice} from "app/crud/app/pigeonNotices/createPigeonNotice";
import {FormPigeonNotice, pigeonNoticeSchema} from "views/app/PigeonNotices/common/form/PigeonNoticeForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  {label: "Lista ofert", url: route["app.pigeonNotices"]},
  {label: "Dodaj ofertę"},
];

const ViewPigeonNoticeAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: pigeonNoticeSchema.default(),
    resolver: yupResolver(pigeonNoticeSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.pigeonNotice'](data.fancierPigeonNoticeId) : route['app.pigeonNotices']);
  }

  const mutation = useHookFormMutation(methods, createPigeonNotice, {handleSuccess});

  const onError = () => {
    console.log("ERROR");
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4>Dodaj ofertę</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormPigeonNotice
                      submitText="Dodaj"
                      cancelUrl={route['app.pigeonNotices']}
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

export default ViewPigeonNoticeAdd;
