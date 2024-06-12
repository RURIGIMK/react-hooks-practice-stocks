import React from 'react';

const Stock = ({ data, onClick }) => {
  return (
    <div className="stock" onClick={() => onClick(data)}>
      <h3>{data.ticker}</h3>
      <p>Price: ${data.price}</p>
      <p>Type: {data.type}</p>
    </div>
  );
};

export default Stock;
