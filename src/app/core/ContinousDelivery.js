import React from "react";
import {useAuth} from "app/hooks/auth/useAuth";

// ContinuousDelivery
export const ContinuousDelivery = ({components:C, renders:r}) => {
  const { hasRole } = useAuth();
  //
  if(hasRole(role.developer) || window.location.hostname === 'localhost') {
    //
    if(C?.dev) {
      return (<C.dev/>)
    } else if(r?.dev) {
      return r.dev();
    } else {
      return null;
    }
  }
  //
  if(C?.prod) {
    return (<C.prod/>)
  } else if(r?.prod) {
    return r.prod();
  } else {
    return null;
  }
}
