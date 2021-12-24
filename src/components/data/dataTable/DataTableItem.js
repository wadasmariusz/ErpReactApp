import React from "react";
import classnames from "classnames";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledRow = styled.tr`
  &::after {
    content: "";
    position: absolute;
    background: transparent;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5em;
    transition: background-color 0.2s ease;
    pointer-events: none;
  }
  &:hover {
    &::after {
      background-color: ${({ isActive }) => isActive && "rgba(0, 0, 0, 0.075)"};
    }
  }
`;

export const DataTableItem = ({
  children,
  className,
  onClick,
  path,
  ...props
}) => {
  const history = useHistory();
  return (
    <StyledRow
      isActive={onClick || path}
      className={classnames({
        "position-relative": true,
        [className]: !!className,
        "cursor-pointer": onClick || path,
      })}
      onClick={onClick || (path && (() => history.push(path))) || undefined}
      {...props}
    >
      {children?.length != null ? (
        children.map((child, i) => <td key={i}>{child}</td>)
      ) : (
        <td>{children}</td>
      )}
    </StyledRow>
  );
};
