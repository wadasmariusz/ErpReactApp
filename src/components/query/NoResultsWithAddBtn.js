import React from 'react';
import {CondLink} from "app/router/components/CondLink";
import {Plus} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";

export const NoResultsWithAddBtn = (
  {
    url,
    btnOnClick,
    color='success',
    btnText = 'Dodaj',
    text = 'Nic nie znaleziono',
    noPadding = false,
    ...props
  }
) => {
  return (
    <div className={`text-center m-auto ${noPadding ? '' : 'py-3'}`} {...props}>
      <h4 className="text-dark-50 my-0">{text}</h4>
      {(url || btnOnClick) && (
        <CondLink
          to={url}
          className={`btn btn-sm btn-${color} mt-2`}
          onClick={btnOnClick}
        >
          <Plus size={SIZE_INPUT_ICON}/>
          {btnText}
        </CondLink>
      )}
    </div>
  );
};
