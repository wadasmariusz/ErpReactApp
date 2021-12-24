import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {FormShelf, shelfSchema} from "views/app/Shelfs/common/form/ShelfForm";
import {useHistory} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {createShelf} from "app/crud/app/shelfs/createShelf";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  {label: 'Lista gołębi', url: route['app.shelfs']},
  {label: 'Dodaj gołębia'}
];

const ViewShelfAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: shelfSchema.default(),
    resolver: yupResolver(shelfSchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.shelf'](data.fancierShelfId) : route['app.shelfs']);
  }

  const mutation = useHookFormMutation(methods, createShelf, {handleSuccess});

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4>Dodaj półki</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormShelf
                      submitText="Dodaj"
                      cancelUrl={route['app.warehouse']}
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

export default ViewShelfAdd;
