import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import {mapPigeonGenderToIcon} from "components/maps/mapPigeonGenderToIcon";
import {mapPigeonStatusToBadge} from "components/maps/mapPigeonStatusToBadge";
import {mapPigeonColorToBadge} from "components/maps/mapPigeonColorToBadge";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PigeonImg = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  border-radius: ${props => props.isDefault ? "5%" : "50%"};
  margin-right: 1em;
`;

const headers = [
  ["NR OBRĄCZKI", 2],
  ["IMIĘ", 1],
  ["ROCZNIK", 1],
  ["PŁEĆ", 1],
  ["BARWA", 1],
  ["RASA", 1],
  ["STATUS", 1],
];

export const PigeonsDataTable = () => {
  const {data} = useQueryContext();
  console.log(data)
  const pigeons = data?.pigeons || data || [];
  return (

    <DataTable header={headers}>
      {!!pigeons?.length &&
      pigeons?.map(
        ({
           id,
           name,
           photoUrl,
           ringNumber,
           gender,
           year,
           color,
           breed,
           status,
           isDefaultImage,
         }) => {

          const isDefault = isDefaultImage || photoUrl === "https://api.pigener.com/images/default/pigeon.png";

          return (<DataTableItem
            className="data-table-item"
            key={id}
            path={route["app.pigeon"](id)}
          >
            <ItemWrapper>
              <PigeonImg src={photoUrl} alt="avatar" isDefault={isDefault}/>
              <span className="text-nowrap">{ringNumber}</span>
            </ItemWrapper>
            <div className="text-uppercase">{name}</div>
            <div>
                <span className="text-nowrap">
                  {year}
                </span>
            </div>
            <div>{mapPigeonGenderToIcon(gender, id)}</div>
            <div>
              {!!color && mapPigeonColorToBadge(color)}
            </div>
            <div>{breed?.name}</div>
            <div>
              {mapPigeonStatusToBadge(status)}
            </div>
          </DataTableItem>)
        }
      )}
    </DataTable>
  );
};
