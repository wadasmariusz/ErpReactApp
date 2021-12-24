import React from "react";
import {Badge, NavItem, NavLink} from 'reactstrap'
import {Link} from "react-router-dom";
import {useMatchPathname} from "app/hooks/helpers/useMathPathname";
import styled, {css} from 'styled-components'

const TabLinksWrapper = styled.div`
    position: relative;
    display: flex;
    align-self: flex-end;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    margin-right: auto;
    border: 0;
    order: 1;
    background-image: linear-gradient(to top, #0001, transparent);
    @media (min-width: 992px) {
      order: 0;
    }
    .nav-item {
        display: flex;
    }
`;

const StyledTabContainer = styled.div`
    background-image: linear-gradient(to top, #0001, transparent);
    --activeTabBg: #f8f8f8;
    ${({ variant }) => variant==='white' && css`
        --activeTabBg: #fff;
    `}
    ${TabLinksWrapper} {
        background-image: none;
    }
    a:not(.btn) {
        display: flex;
        align-items: center;
        padding: 0.75rem 1.5rem;
        color: #80808F;
        background-color: #40424914;
        border: 0 !important;
        border-top-left-radius: 0.42rem;
        border-top-right-radius: 0.42rem;
        margin-right: 0.25rem;

        &.active {
            background-color: var(--activeTabBg) !important;
            box-shadow: 0 -0.55rem 0.75rem -0.2rem #0002;
            color: #80808F;
        }
    }
`;

export const NavContainer = ({variant, children, tabAppend}) => (
  <StyledTabContainer className="container-fluid px-0" variant={variant}>
    <div className="container d-flex flex-column flex-column flex-lg-row align-items-center justify-content-between pt-1">
      <TabLinksWrapper>
        {children}
      </TabLinksWrapper>
      {tabAppend}
    </div>
  </StyledTabContainer>
);

export const Tab = ({ tab={}, path, to:passedTo, exact, exactActive }) => {
  const to = passedTo??path;
  const isActive = useMatchPathname(to, { exact: (exactActive??exact) });
  return (
    <NavItem>
      <NavLink
        eventkey={to}
        active={isActive}
        tag={Link}
        to={to}
        className="px-75 py-50"
      >
        <TabInner {...tab} />
      </NavLink>
    </NavItem>
  )
};

const TabInner = ({icon, title, badge}) => (
  <div className="px-50 py-25">
    {icon}
    <span className={`small ${icon ? 'ml-25' : ''}`}>{title}</span>
    {badge != null && (
      <Badge variant="primary" className="py-1 px-2 ml-2">
        {badge}
      </Badge>
    )}
  </div>
);
