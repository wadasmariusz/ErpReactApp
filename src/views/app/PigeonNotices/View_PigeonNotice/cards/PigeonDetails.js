import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {mapPigeonStatusToBadge} from "components/maps/mapPigeonStatusToBadge";
import {mapPigeonColorToBadge} from "components/maps/mapPigeonColorToBadge";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import {route} from "app/router/urls/routes";
import {Link} from "react-router-dom";

const Line = styled.div`
  margin-bottom: 0.5rem;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const BigLine = styled(Line)`
  b {
    font-size: 1.1rem;
  }
`


export const PigeonDetails = () => {
  const {data} = useQueryContext();

  return (
    <>
      <Link to={route["app.pigeon"](data?.pigeon?.id)}>
        <div className="d-flex justify-content-start mb-50">
          <img className="img-fluid rounded" src={data?.pigeon?.photoUrl}
               height="104" width="104" alt="Pigeon avatar"/>
          <div className="d-flex flex-column ml-1">
            <div className="user-info mb-1">
              <h4 className="mb-0">{data?.pigeon?.ringNumber}</h4>
              <strong className="custom-name d-flex">
                {data?.pigeon?.name}
              </strong>
            </div>
          </div>
        </div>
      </Link>
      {data?.pigeon?.status && <BigLine>Status: <b>{mapPigeonStatusToBadge(data?.pigeon?.status)}</b></BigLine>}
      {data?.pigeon?.color && <BigLine>Barwa: <b>{mapPigeonColorToBadge(data?.pigeon?.color)}</b></BigLine>}
      {data?.pigeon?.eyeColor && <Line>Kolor oczu: <b>{data?.pigeon?.eyeColor?.name}</b></Line>}
      {data?.pigeon?.breed && <Line>Rasa: <b>{data?.pigeon?.breed?.name}</b></Line>}
      {data?.pigeon?.hatchingDate && (
        <Line>
          Data wyklucia: <b>{dayjs(data?.pigeon?.hatchingDate).format("DD-MM-YYYY")}</b>
        </Line>
      )}
      {data?.pigeon?.description && <Line>Opis: {data?.pigeon?.description}</Line>}
    </>
  );
};
