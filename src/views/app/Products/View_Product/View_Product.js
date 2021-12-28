import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleProduct} from "app/crud/app/products/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardProductDetails} from "./cards/CardProductDetails";

const breadcrumbItems = (name) => [
  {label: "Lista produktów", url: route["app.products"]},
  {label: `Produkt: ${name ?? ""}`},
];

const ViewProduct = () => {
  const {productId} = useParams();
  const query = useGetSingleProduct(productId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        <EditButton url={route["app.product.edit"](productId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardProductDetails/>
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

export default ViewProduct;
