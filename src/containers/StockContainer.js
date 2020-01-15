import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} addPortfolioStock={this.props.addPortfolioStock} />)
        }
      </div>
    );
  }

}

export default StockContainer;
