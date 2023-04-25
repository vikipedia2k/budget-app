import React from 'react';

function Positive(props) {
  const { width = 24, height = 24 } = props;

  return (
    <svg viewBox="0 0 24 24" width={width} height={height}>
      <circle cx="12" cy="12" r="11" fill="#28a745" />
      <rect x="11" y="5" width="2" height="14" fill="#fff" />
      <rect x="5" y="11" width="14" height="2" fill="#fff" />
    </svg>
  );
}

export default Positive;
