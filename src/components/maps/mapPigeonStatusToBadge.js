// 0: {id: 1, name: "Aktywny", value: "Active"}
// 1: {id: 2, name: "Martwy", value: "Dead"}
// 2: {id: 3, name: "Zagubiony", value: "Lost"}
// 3: {id: 4, name: "Sprzedany", value: "Sold"}
// 4: {id: 5, name: "Rozpłodnik", value: "Breeder"}
// 5: {id: 6, name: "Wypożyczony", value: "OnLoan"}
// 6: {id: 7, name: "Wdowiec", value: "Widow"}

import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

const getColor = id => {
  switch (id) {
    case 1: // Aktywny
      return '#28C74F'
    case 2: // Martwy
      return '#222222'
    case 3: // Zagubiony
      return '#007bff'
    case 4: // Sprzedany
      return '#fd7e14'
    case 5: // Rozpłodnik
      return '#228B22'
    case 6: // Wypożyczony
      return '#8F00FF'
    case 7: // Wdowiec
      return '#000080'
  }
}

export const mapPigeonStatusToBadge = ({id, name}) => {
  if (!id) return null;
  return <CustomBadge
    color={getColor(id)}
    className="badge badge-pill"
  >
    {name}
  </CustomBadge>
}


