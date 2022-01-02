import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

const getColor = status => {
  switch (status) {
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
const getName = status => {
  switch (status) {
    case 1: // W trakcie
      return 'Nowy'
    case 2: // Potwierdzony
      return 'Potwierdzony'
    case 3: // Anulowny
      return 'Anulowny'
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

export const mapDocumentStatusToBadge = (status) => {
  if (!status) return null;
  return <CustomBadge
    color={getColor(status)}
    className="badge badge-pill"
  >
    {getName(status)}
  </CustomBadge>
}


