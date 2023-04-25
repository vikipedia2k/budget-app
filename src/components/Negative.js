import React from 'react';

function Negative(props) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 20 20" {...props}>
      <circle cx="10" cy="10" r="9" fill="#FF0000" />
      <rect x="4" y="9" width="12" height="2" rx="1" fill="#FFFFFF" />
    </svg>
  );
}


export default Negative;
