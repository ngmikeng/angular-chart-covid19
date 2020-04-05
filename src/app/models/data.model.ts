
export interface ICovid19DateData {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

export interface ICovid19TimeSeriesData {
  [contryName: string]: ICovid19DateData[]
}
