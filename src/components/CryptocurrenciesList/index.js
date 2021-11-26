import {Component} from 'react'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="header-list-item">
      <p className="coin-type">Coin Type</p>
      <div className="values-container">
        <p className="value-text">USD</p>
        <p className="value-text">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrrenciesView = () => {
    const {cryptocurrenicesListDetails} = this.props
    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenicesListDetails.map(eachCrypto => (
            <CryptocurrencyItem
              key={eachCrypto.id}
              cryptoDetails={eachCrypto}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrenices-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-img"
        />
        {this.renderCryptocurrrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
