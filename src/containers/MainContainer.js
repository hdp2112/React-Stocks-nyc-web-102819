import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock';

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStock: [],
    displayStock: [],
    filter: ""
  }

  addPortfolioStock = (id, name, ticker, price) => {
    this.setState({
      portfolioStock: [...this.state.portfolioStock, {id, name, ticker, price}]
    })
  }

  removePortfolioStock = (id) => {
    this.setState({
      portfolioStock: this.state.portfolioStock.filter(stock => stock.id !== id)
    })
  }

  sortStocks = (name) => {
    if (name === "Alphabetically") {
      this.setState({
        stocks: this.state.stocks.sort((stock1, stock2) => stock1.name.localeCompare(stock2.name))
      })
    } else if (name === "Price") {
        this.setState({
          stocks: this.state.stocks.sort((stock1, stock2) => stock2.price - stock1.price)
        })
    }
  }

  filterStock = (value) => {
    if (value !== "All") {
      this.setState({
        stocks: this.state.displayStock.filter(stock => stock.type === value)
      })
    } 
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({
          stocks: stocks,
          displayStock: stocks
        })
      })
  }

  render() {
    console.log(this.state.stocks)
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} filterStock={this.filterStock} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} addPortfolioStock={this.addPortfolioStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStock={this.state.portfolioStock} removePortfolioStock={this.removePortfolioStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
