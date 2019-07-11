import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getHistory } from '../../actions/history'
import { HistoryItem } from '../../types/history'
import Candles from '../../containers/Candles'
import { Container } from './styles'

interface IProps {
  items: HistoryItem[],
  error: boolean,
  getHistory: () => void
}

const enhance = connect(
  null,
  { getHistory }
)

const Main = (props: IProps) => {
  const { getHistory } = props

  useEffect(() => {
    getHistory()
  }, [])

  return (
    <Container>
      <Candles />
    </Container>
  )
}

export default enhance(Main)
