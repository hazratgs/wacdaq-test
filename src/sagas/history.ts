import { takeLatest, put, call, select } from 'redux-saga/effects'
import * as actions from '../actions/history'
import axios from 'axios'
import { HistoryItem, VolumeItem, IFetchPatams } from '../types/history'
import State from '../types/state'

const fetchHistory = ({ symbol, resolution, from, to }: IFetchPatams) =>
  axios.get(`/plot/history?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}`)

function* getHistory() {
  try {
    const state: State = yield select()
    const { symbol, from } = state.history

    const params: IFetchPatams = {
      symbol,
      from,
      resolution: 15,
      to: Date.now() / 1000
    }

    const response = yield call(fetchHistory, params)
    const { s, t, c, o, h, l, v } = response.data

    if (s !== 'ok') throw new Error(`status ${s}`)

    const history: HistoryItem[] = t.map((timestamp: number, i: number) => [timestamp * 1000, o[i], h[i], l[i], c[i]])
    const volume: VolumeItem[] = t.map((timestamp: number, i: number) => [timestamp * 1000, v[i]])

    yield put(actions.getHistorySuccess(history))
    yield put(actions.getVolumeSuccess(volume))

    // update
    yield put(actions.getHistory(false))
  } catch (e) {
    yield put(actions.getHistoryError())
    console.log('ERROR', e)
  }
}

export default function* watcher() {
  yield takeLatest(actions.getHistory, getHistory)
}
