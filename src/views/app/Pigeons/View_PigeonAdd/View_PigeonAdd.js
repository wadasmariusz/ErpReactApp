import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {FormPigeon, pigeonSchema} from "views/app/Pigeons/common/form/PigeonForm";
import {useHistory} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {createPigeon} from "app/crud/app/pigeons/createPigeon";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  {label: 'Lista gołębi', url: route['app.pigeons']},
  {label: 'Dodaj gołębia'}
];

const ViewPigeonAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: pigeonSchema.default(),
    resolver: yupResolver(pigeonSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.pigeon'](data.fancierPigeonId) : route['app.pigeons']);
  }

  const mutation = useHookFormMutation(methods, createPigeon, {handleSuccess});

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4>Dodaj gołębia</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormPigeon
                      submitText="Dodaj"
                      cancelUrl={route['app.pigeons']}
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

export default ViewPigeonAdd;
