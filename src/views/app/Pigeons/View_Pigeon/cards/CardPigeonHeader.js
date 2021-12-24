import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import PhotoUploadForm from "../../common/form/PhotoUploadForm";
import styled from "styled-components";
import {mapPigeonGenderToIcon} from "components/maps/mapPigeonGenderToIcon";

const PigeonImg = styled.img`
  height: 10rem;
  object-fit: cover;
  width: 100%;
  margin-bottom: 1em;
`;

export const CardPigeonHeader = () => {
  const {data, refetch} = useQueryContext();

  return (
    <div className="d-flex justify-content-start">
      <img className="img-fluid rounded" src={data?.photoUrl}
           height="104" width="104" alt="Pigeon avatar"/>
      <div className="d-flex flex-column ml-1">
        <div className="user-info mb-1">
          <h4 className="mb-0">{data?.ringNumber}</h4>
          <strong className="custom-name d-flex">
            {data?.name}
          </strong>
        </div>
        <PhotoUploadForm refetch={refetch}/>
      </div>
    </div>
  );
};
