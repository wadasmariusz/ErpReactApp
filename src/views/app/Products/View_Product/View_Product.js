import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleProduct} from "app/crud/app/products/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardProductDetails} from "./cards/CardProductDetails";
import {CardPigeonParents} from "../../Pigeons/View_Pigeon/cards/CardPigeonParents";
import {CardPigeonWarehouse} from "../../Pigeons/View_Pigeon/cards/CardPigeonWarehouse";
import {CardProductKind} from "./cards/CardProductKind";
import {CardAvailabilityProductsDataTable} from "./cards/CardAvailabilityProductsDataTable";

const breadcrumbItems = (name) => [
  {label: "Lista produktów", url: route["app.products"]},
  {label: `Produkt: ${name ?? ""}`},
];

const ViewProduct = () => {
  const {productId} = useParams();
  const query = useGetSingleProduct(productId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
          <EditButton url={route["app.product.edit"](productId)}/>
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12 col-lg-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardProductDetails/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className='col-12'>
                          <CardAvailabilityProductsDataTable/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 d-flex  flex-column">
              <div className="card w-100 h-49 mb-1">
                <div className="card-body d-flex flex-column">
                  <CardProductKind/>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-body d-flex flex-column">
                  {/*<CardProductCategory/>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueryProvider>
    </>
  );
};

export default ViewProduct;
