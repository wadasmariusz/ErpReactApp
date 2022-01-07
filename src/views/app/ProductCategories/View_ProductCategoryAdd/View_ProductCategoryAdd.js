import React from "react";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { route } from "app/router/urls/routes";
import { useHistory } from "react-router";
import { Card, Container, Button } from "reactstrap";
import { createProductCategory } from "app/crud/app/productCategories/createProductCategory";
import {productCategorySchema, FormProductCategory} from "views/app/ProductCategories/common/form/ProductCategoryForm";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHookFormMutation} from "app/hooks/crud/useHookFormMutation";
import {HookFormError} from "components/form/helpers/HookFormError";

const breadcrumbItems = [
  { label: "Lista kategori produktów", url: route["app.productCategories"] },
  { label: "Dodaj kategorie produktu" },
];

const ViewProductCategoryAdd = () => {
  const history = useHistory();
  const methods = useForm({
    defaultValues: productCategorySchema.default(),
    resolver: yupResolver(productCategorySchema),
  });

  const handleSuccess = ({data}) => { //redirect to employee
    history.push(data?.id ? route['app.productCategory'](data.productCategoryId) : route['app.productCategories']);
  }

  const mutation = useHookFormMutation(methods, createProductCategory, {handleSuccess});

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
                <h4>Dodaj kategorie produktu</h4>
              </div>
              <div className="card-body">
                <FormProvider {...methods}>
                  <form onSubmit={mutation.mutate}>
                    <HookFormError/>
                    <FormProductCategory
                      submitText="Dodaj"
                      cancelUrl={route['app.productCategories']}
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

export default ViewProductCategoryAdd;
