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
    case 0: // Brak Danych
      return '#555555'
    case 1: // Aktywne
      return '#28C74F'
    case 2: // Sprzedane
      return '#F7C728'
    case 3: // Archiwum
      return '#555555'
  }
}

export const mapPigeonNoticeStatusToBadge = ({id, name}) => {
  if (!id) return null;
  return <CustomBadge
    color={getColor(id)}
    className="badge badge-pill"
  >
    {name}
  </CustomBadge>
}


