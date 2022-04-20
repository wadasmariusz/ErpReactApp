import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleSheet} from "app/crud/app/sheets/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {CardSheetDetails} from "./cards/CardSheetDetails";
import {CardAvailabilitySheetsDataTable} from "./cards/CardAvailabilitySheetsDataTable";

const breadcrumbItems = (name) => [
  {label: "Lista blach", url: route["app.sheets"]},
  {label: `Blacha: ${name ?? ""}`},
];

const ViewSheet = () => {
  const {sheetId} = useParams();
  const query = useGetSingleSheet(sheetId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
          {/*<EditButton url={route["app.sheet.edit"](sheetId)}/>*/}
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardSheetDetails/>
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
                          <CardAvailabilitySheetsDataTable/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueryProvider>
    </>
  );
};

export default ViewSheet;
