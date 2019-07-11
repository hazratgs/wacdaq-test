import React from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { State } from '../../types/state'
import { HistoryItem } from '../../types/history'
import { getHistory } from '../../actions/history'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'
import highstockOptions from './options'
import { Container, Symbol } from './styles'

interface IProps {
  symbol: string,
  items: HistoryItem[],
  error: boolean,
  loader: boolean,
  getHistory: () => void
}

const enhance = connect(
  (state: State) => ({
    symbol: state.history.symbol,
    items: state.history.items,
    error: state.history.error,
    loader: state.history.loader
  }),
  { getHistory }
)

const Candles = (props: IProps) => {
  const { symbol, items, error, loader, getHistory } = props

  const options = {
    ...highstockOptions,
    series: [{
      type: 'candlestick',
      name: symbol,
      data: items
    }]
  }

  return (
    <Container>
      <Symbol>{symbol}</Symbol>
      {loader && <Loader />}
      {error && <ErrorMessage handle={getHistory}/>}
      {!!items.length && (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType='stockChart'
          options={options}
        />
      )}
    </Container>
  )
}

export default enhance(Candles)
