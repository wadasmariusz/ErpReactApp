// 0: {id: 1, name: "Lotowy", value: "Flights"}
// 1: {id: 2, name: "Rozpłodowy", value: "Breeding"}


import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

export const mapPigeonColorToBadge = ({hexCode, name}) => {
  return <CustomBadge
    color={hexCode}
    className="badge badge-pill"
  >
    {name}
  </CustomBadge>
}


