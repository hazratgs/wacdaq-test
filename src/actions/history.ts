import { createAction } from 'redux-act'
import { IHistoryItem } from '../types/history'

export const getHistory = createAction('GET_HISTORY')
export const getHistorySuccess = createAction<IHistoryItem[]>('GET_HISTORY_SUCCESS')
export const getHistoryError = createAction('GET_HISTORY_ERROR')
