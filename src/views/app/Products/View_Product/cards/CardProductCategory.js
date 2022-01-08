import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {EditProductCategory} from "views/app/Pigeons/View_Pigeon/components/modal/EditProductCategory";

export const CardProductCategory = () => {
  const {data} = useQueryContext();

  return (
    <>
      {/*{data?.categories?.id ? (*/}
      {/*  <Link to={route["app.warehouse"](data?.warehouse?.id)}>*/}
      {/*    <div className="d-flex justify-content-start">*/}
      {/*      <div className="d-flex flex-column">*/}
      {/*        <div className="user-info mb-1">*/}
      {/*          <h3 className="mb-50">Gołębnik</h3>*/}
      {/*          <h4 className="custom-name mb-0">{data?.warehouse?.name}</h4>*/}
      {/*          <h6 className="mb-0">{data?.warehouse?.type?.name}</h6>*/}
      {/*          <small className="d-flex black">*/}
      {/*            {data?.warehouse?.description}*/}
      {/*          </small>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Link>) : (*/}
      {/*  <p className={"mb-50"}>Brak przypisanej kategorii</p>*/}
      {/*)}*/}
      {/*<EditProductCategory/>*/}
    </>
  )
}
