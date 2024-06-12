import React from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';

const MainContainer = () => {
  return (
    <div className="main-container">
      <StockContainer />
      <PortfolioContainer />
    </div>
  );
};

export default MainContainer;
