import React, {createContext, useContext} from 'react';

const TabSwitchContext = createContext(null);

export const TabSwitchProvider = ({ tabs, children }) => {
  return (
    <TabSwitchContext.Provider value={{tabs}}>
      {children}
    </TabSwitchContext.Provider>
  );
};

export const useTabSwitchContext = () => {
  const context = useContext(TabSwitchContext);
  if(!context || !context.tabs) {
    throw new Error('Missing TabSwitchProvider');
  }
  return {
    tabs: context.tabs,
  };
}
