export interface IHistoryState {
  symbol: string,
  from: number,
  items: HistoryItem[],
  volume: VolumeItem[],
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

export type VolumeItem = Array<number[]>