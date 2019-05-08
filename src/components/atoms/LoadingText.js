import React from 'react';

const LoadingText = ({ isLoading, children }) => (
  <span>{isLoading ? <span>Loading...</span> : children}</span>
);

export default LoadingText;
