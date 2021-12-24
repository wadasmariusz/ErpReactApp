import React, {useContext} from 'react';

const EndpointsContext = React.createContext({});

export const EndpointsProvider = ({children, endpoints, keyPrefix}) => {
  return (
    <EndpointsContext.Provider children={children} value={{endpoints, keyPrefix}}/>
  );
};

export const useEndpoints = () => {
  const context = useContext(EndpointsContext);
  // console.log(context)
  if(!context || !context?.endpoints) {
    throw new Error('Missing EndpointsProvider');
  }
  if(!context?.keyPrefix) {
    throw new Error('Missing "keyPrefix" parameter');
  }
  return {
    ...context.endpoints,
    keyPrefix: context?.keyPrefix,
  };
}
