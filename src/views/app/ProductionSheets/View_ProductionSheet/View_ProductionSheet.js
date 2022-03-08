import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleProductionSheet} from "app/crud/app/productionSheets/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardProductionSheetDetails} from "./cards/CardProductionSheetDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardProductionSheetItemsDataTable} from "./cards/CardProductionSheetItemsDataTable";
import {ConfirmProductionSheet} from "./components/modals/ConfirmProductionSheet";
import {CanceledProductionSheet} from "./components/modals/CanceledProductionSheet";
// import {AddProductionSheetShelves} from "./components/modals/AddProductionSheetShelves";

const breadcrumbItems = (id) => [
  {label: "Lista operacji cięcia", url: route["app.productionSheets"]},
  {label: `CK-${id ?? ""}`},
];

const ViewProductionSheet = () => {
  const {productionSheetId} = useParams();
  const query = useGetSingleProductionSheet(productionSheetId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledProductionSheet/> }
          {query?.data?.status === 1 && query?.data?.sheets?.length > 0 && <ConfirmProductionSheet/> }
          {query?.data?.status === 1 && <EditButton url={route["app.productionSheet.edit"](productionSheetId)}/> }
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardProductionSheetDetails/>
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
                          <CardProductionSheetItemsDataTable/>
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

export default ViewProductionSheet;
