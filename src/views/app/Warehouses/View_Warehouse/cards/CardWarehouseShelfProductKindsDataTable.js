import React from "react";
import {CardWarehouseShelfProductsDataTable} from "./CardWarehouseShelfProductsDataTable";

export const CardWarehouseShelfProductKindsDataTable = ({productKinds}) => {
  return (
    <>
      {!!productKinds?.length &&
        productKinds?.map(
          ({
             id,
             name,
             products
           }) => {
            return (
              <div className="mb-1">
                <h5>{name}</h5>
                <CardWarehouseShelfProductsDataTable products={products}/>
              </div>
            )
          }
        )}
    </>
  );
};
