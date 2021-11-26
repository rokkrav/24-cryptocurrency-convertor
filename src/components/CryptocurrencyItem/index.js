import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="cryptocurrency-item-container">
      <div className="cryptocurrency-info">
        <img src={currencyLogo} alt={currencyName} className="currency-img" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
