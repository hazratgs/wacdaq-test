export interface IHistoryState {
  items: IHistoryItem[]
}

export interface IHistoryItem {
  timestamp: number
  open: number
  close: number
  high: number
  low: number
  volume: number
}

export interface IFetchPatams {
  symbol: string
  resolution: number
  from: number
  to: number
}