// 0: {id: 1, name: "Lotowy", value: "Flights"}
// 1: {id: 2, name: "Rozpłodowy", value: "Breeding"}


import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

const getTypeColor = id => {
  switch (id) {
    case 1: // Lotowy
      return '#216723'
    case 2: // Rozpłodowy
      return '#2e65e0'
  }
}

export const mapWarehouseTypeToBadge = ({id, name}) => {
  if (!id) return null;
  return <CustomBadge
    color={getTypeColor(id)}
    className="badge badge-pill"
  >
    {name}
  </CustomBadge>
}


