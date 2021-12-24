import React from 'react';

export const ShortText = ({children, maxLength=20, ...props}) => {
  if(typeof children !== 'string') {
    return null
  }
  return (
    <div {...props}>
      {children.length<=maxLength-3 ? (
        children
      ) : (
        children.substr(0,17) + '...'
      )}
    </div>
  );
};
