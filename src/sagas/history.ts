import { takeLatest, put, call } from 'redux-saga/effects'
import * as actions from '../actions/history'
import axios from 'axios'
import { IHistoryItem, IFetchPatams } from '../types/history'

const fetchHistory = ({ symbol, resolution, from, to }: IFetchPatams) =>
  axios.get(`/plot/history?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`)

function* getHistory() {
  try {
    const params: IFetchPatams = {
      symbol: 'ETH/BTC',
      resolution: 15,
      from: 1546462800,
      to: Date.now() / 1000
    }

    const response = yield call(fetchHistory, params)
    const history = response.data

    window.console.log(history)

  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getHistory, getHistory)
}
