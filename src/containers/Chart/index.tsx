import React from 'react'
import { connect } from 'react-redux'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { State } from '../../types/state'
import { VolumeItem } from '../../types/history'
import highstockOptions from './options'
import Loader from '../../components/Loader'
import { Container, Title } from './styles'

interface IProps {
  items: VolumeItem[],
  error: boolean,
  loader: boolean,
}

const enhance = connect(
  (state: State) => ({
    items: state.history.volume,
    error: state.history.error,
    loader: state.history.loader
  })
)

const Chart = (props: IProps) => {
  const { items, error, loader } = props
  const [series] = highstockOptions.series

  const options = {
    ...highstockOptions,
    series: [{
      ...series,
      data: items
    }]
  }

  return (
    <Container>
      <Title>Volume</Title>
      {loader && <Loader />}
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

export default enhance(Chart)
