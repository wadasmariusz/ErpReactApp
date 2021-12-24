import React from "react";
import styled from "styled-components";

const StyledFlagIcon = styled.span`
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    font-size: 1rem;
`;
const StyledForceFlagIcon = styled.span`
  min-width: ${({minWidth}) => minWidth}rem;
`;

export const FlagIcon = ({ code, className = '', ...props }) => {
  if (!code?.toLowerCase) return null;
  return (
    <StyledFlagIcon
      className={`flag-icon flag-icon-${code.toLowerCase()} ${className}`}
      {...props}
    />
  );
};

export const ForceFlagIcon = ({minWidth, code, ...props}) => (
  <StyledForceFlagIcon>
    {code && <FlagIcon code={code} {...props}/>}
  </StyledForceFlagIcon>
);
