import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

const getColor = status => {
  switch (status) {
    // case 1: // W trakcie
    //   return '#034e98'
    // case 2: // Potwierdzony
    //   return '#228B22'
    // case 3: // Anulowny
    //   return '#e10f0f'
    case 0: //Brak danych
      return '#034b99'
    case 1: // W trakcie
      return '#034e68'
    case 2: // Produkcja
      return '#034e38'
    case 3: // Skompletowane
      return '#034e09'
    case 4: // Zaokonczone
      return '#228B22'
  }
}
const getName = status => {
  switch (status) {
    case 0: //Brak danych
      return 'Brak danych'
    case 1: // W trakcie
      return 'Nowy'
    case 2: // Produkcja
      return 'Produkcja'
    case 3: // Skompletowane
      return 'Skompletowane'
    case 4: // Zaokonczone
      return 'Zakończone'
  }
}

export const mapOrderStatusToBadge = (orderStatus) => {
  if (!orderStatus) return null;
  return <CustomBadge
    color={getColor(orderStatus)}
    className="badge badge-pill"
  >
    {getName(orderStatus)}
  </CustomBadge>
}


