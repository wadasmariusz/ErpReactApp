import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleProductCategory} from "app/crud/app/productCategories/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardProductCategoryDetails} from "./cards/CardProductCategoryDetails";

const breadcrumbItems = (name) => [
  {label: "Lista kategori produktów", url: route["app.productCategories"]},
  {label: `Kategoria produktu: ${name ?? ""}`},
];

const ViewProductCategory = () => {
  const {productCategoryId} = useParams();
  const query = useGetSingleProductCategory(productCategoryId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        <EditButton url={route["app.productCategory.edit"](productCategoryId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardProductCategoryDetails/>
                    </div>
                  </div>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductCategory;
