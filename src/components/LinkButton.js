import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

export const LinkButton = ({
  to,
  color='primary',
  size='sm',
  icon=null,
  children,
  label,
}) => {
  return (
    <Link to={to}>
      <Button size={size} color={color}>
        {icon}
        <span className={icon?'ml-25':''}>{children ?? label}</span>
      </Button>
    </Link>
  );
};
