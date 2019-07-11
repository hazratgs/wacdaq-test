export interface IHistoryState {
  symbol: string,
  from: number,
  items: HistoryItem[],
  volume: number[],
  error: boolean,
  loader: boolean
}

export interface IFetchPatams {
  symbol: string
  resolution: number
  from: number
  to: number
}

export type HistoryItem = Array<number[]>
