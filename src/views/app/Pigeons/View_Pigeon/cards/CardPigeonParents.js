import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {EditPigeonParent} from "views/app/Pigeons/View_Pigeon/components/modal/EditPigeonParent";

const ParentCard = ({pigeon}) => {
  if (!pigeon) {
    return "Brak danych";
  }
  const {id, name, photoUrl, ringNumber} = pigeon;
  return (
    <Link to={route["app.pigeon"](id)}>
      <div className="d-flex justify-content-start">

        <img className="img-fluid rounded" src={photoUrl}
             height="52" width="52" alt="Pigeon avatar"/>
        <div className="d-flex flex-column ml-1">
          <div className="user-info mb-1">

            <h4 className="mb-0">{ringNumber}</h4>
            <strong className="custom-name d-flex">
              {name}
            </strong>

          </div>
        </div>

      </div>
    </Link>
  )
}

export const CardPigeonParents = () => {

  const {data} = useQueryContext();

  return (
    <>
      <div className="flex-grow-1">
        <h5>Ojciec</h5>
        <ParentCard
          pigeon={data?.father}
        />
        <EditPigeonParent className={'mt-50'}/>
      </div>
      <div className="flex-grow-1 mt-1">
        <h5>Matka</h5>
        <ParentCard
          pigeon={data?.mother}
        />
        <EditPigeonParent isMother className={'mt-50'}/>
      </div>
    </>
  )
}
