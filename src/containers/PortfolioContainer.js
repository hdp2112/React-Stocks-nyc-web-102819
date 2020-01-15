import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolioStock.map(stock => <Stock key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} removePortfolioStock={this.props.removePortfolioStock} />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
