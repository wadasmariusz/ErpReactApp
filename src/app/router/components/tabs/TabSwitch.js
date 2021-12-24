import React from "react";
import {AppSwitch} from "app/router/components/AppSwitch";
import {TabSwitchProvider} from "app/router/components/tabs/TabSwitchProvider";
import {TabSwitchNav} from "app/router/components/tabs/TabSwitchNav";

export const TabSwitch = ({children, withoutNav}) => {

  const tabs = React.Children.toArray(children);

  return (
    <TabSwitchProvider tabs={tabs}>
      {!withoutNav && (
        <TabSwitchNav/>
      )}
      <AppSwitch>
        {children}
      </AppSwitch>
    </TabSwitchProvider>
  );
};
