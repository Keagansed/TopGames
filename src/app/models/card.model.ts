import { Chart } from 'highcharts';

export interface Card {
    fromCurr: string, 
    toCurr: string,
    exchangeRate: number,
    chart: any
}
