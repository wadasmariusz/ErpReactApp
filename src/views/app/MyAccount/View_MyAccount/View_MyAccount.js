import React from "react";
import { QueryProvider } from "app/context/data/queries/QueryProvider";
import { CardMyAccountBasicInfo } from "views/app/MyAccount/View_MyAccount/cards/Card_MyAccountBasicInfo";
import { ActionButtons } from "./components/ActionButtons";
import { Breadcrumb } from "components/includes/Breadcrumb";
import { useGetProfile } from "app/crud/app/profile/getProfile";

const breadcrumbItems = [{ label: "Informacje" }];

const ViewMyAccount = () => {
  const query = useGetProfile();

  // console.log(query.data);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <ActionButtons />
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query}>
          <CardMyAccountBasicInfo />
        </QueryProvider>
      </div>
    </>
  );
};

export default ViewMyAccount;
