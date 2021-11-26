import {Component} from 'react'

import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenicesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {cryptocurrenicesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenicesData()
  }

  getCryptocurrenicesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptocurrenicesData: formattedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" width={80} height={80} />
    </div>
  )

  renderCryptocurrenciesList = () => {
    const {cryptocurrenicesData} = this.state

    return (
      <CryptocurrenicesList
        cryptocurrenicesListDetails={cryptocurrenicesData}
      />
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="cryptocurrency-tracker-container">
        {isLoading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
