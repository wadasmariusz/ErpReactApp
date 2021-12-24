import React from 'react';
import {NavContainer, Tab} from "app/router/components/tabs/TabSwitchNav.styled";
import {Nav} from 'reactstrap'
import {useTabSwitchContext} from "app/router/components/tabs/TabSwitchProvider";

export const TabSwitchNav = ({ children }) => {

  const {tabs} = useTabSwitchContext();

  return (
    <NavContainer tabAppend={children}>
      <Nav variant="tabs" className="">
        {tabs.map(({key, props: {to, path, tab, exact, exactActive}}) => {
          if(!tab) return null;
          return (
            <Tab
              key={key}
              to={to}
              path={path}
              tab={tab}
              exact={exact}
              exactActive={exactActive}
            />
          )
        })}
      </Nav>
    </NavContainer>
  );
};
