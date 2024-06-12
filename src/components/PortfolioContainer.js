import React, { useState } from 'react';
import Stock from './Stock';

const PortfolioContainer = () => {
  const [portfolio, setPortfolio] = useState([]);

  const handleSell = (stock) => {
    setPortfolio(portfolio.filter(item => item !== stock));
  };

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      {portfolio.map((stock, index) => (
        <Stock key={index} data={stock} onClick={handleSell} />
      ))}
    </div>
  );
};

export default PortfolioContainer;
