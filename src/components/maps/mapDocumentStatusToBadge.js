import {CustomBadge} from "components/maps/common/CustomBadge";
import React from "react";

const getColor = status => {
  switch (status) {
    case 1: // W trakcie
      return '#034e98'
    case 2: // Potwierdzony
      return '#228B22'
    case 3: // Anulowny
      return '#e10f0f'
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


