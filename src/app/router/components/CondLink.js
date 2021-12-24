import React from 'react';
import { Link } from "react-router-dom";

export const CondLink = ({ to, children, className='', ...props }) => {

  if (to)
    return (
      <Link as="div" className={`${className} break-word`} to={to} {...props} >
        {children}
      </Link>
    );

  return (
    <div className={`${className} break-word`} {...props}>
      {children}
    </div>
  );
};
