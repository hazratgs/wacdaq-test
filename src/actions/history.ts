import { createAction } from 'redux-act'
import { HistoryItem } from '../types/history'

export const getHistory = createAction<boolean>('GET_HISTORY')
export const getHistorySuccess = createAction<HistoryItem[]>('GET_HISTORY_SUCCESS')
export const getHistoryError = createAction('GET_HISTORY_ERROR')

export const getVolumeSuccess = createAction('GET_VOLUME_SUCCESS')
