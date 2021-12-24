import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import dayjs from "dayjs";
import {mapPigeonStatusToBadge} from "components/maps/mapPigeonStatusToBadge";
import {mapPigeonColorToBadge} from "components/maps/mapPigeonColorToBadge";

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

export const CardPigeonDetails = () => {
  const {data} = useQueryContext();

  return (
    <div className={"mt-2"}>
      {data?.status && <BigLine>Status: <b>{mapPigeonStatusToBadge(data?.status)}</b></BigLine>}
      {data?.color && <BigLine>Barwa: <b>{mapPigeonColorToBadge(data?.color)}</b></BigLine>}
      {data?.eyeColor && <Line>Kolor oczu: <b>{data?.eyeColor?.name}</b></Line>}
      {data?.breed && <Line>Rasa: <b>{data?.breed?.name}</b></Line>}
      {data?.hatchingDate && (
        <Line>
          Data wyklucia: <b>{dayjs(data?.hatchingDate).format("DD-MM-YYYY")}</b>
        </Line>
      )}
      {data?.description && <Line>Opis: {data?.description}</Line>}
    </div>
  );
};

