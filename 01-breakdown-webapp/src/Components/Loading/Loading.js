import React from 'react';
import('./loading.css');

const Loading = () => (
  <div className="loading-container">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
);

export default Loading;