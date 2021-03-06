import React from 'react'

const Stock = (props) => (
      // let {id, ticker, name, type, price} = props
  <div>

    <div className="card">
      <div className="card-body" onClick={props.removePortfolioStock ? () => props.removePortfolioStock(props.id) : () => props.addPortfolioStock(props.id, props.name, props.ticker, props.price)}>
        <h5 className="card-title">{
            props.name
          }</h5>
        <p className="card-text">{
            props.ticker + ': ' + props.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
