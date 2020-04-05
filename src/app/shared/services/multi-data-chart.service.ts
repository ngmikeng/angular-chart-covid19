import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiDataChartService {

  constructor() { }

  getChartOptions(
    xAxis: any[],
    yAxis: any[],
    series: any[]
  ): Highcharts.Options {
    const options: Highcharts.Options = {
      chart: {
        style: {
          fontFamily: '"Open Sans", Roboto, Arial, sans-serif'
        },
        zoomType: 'x',
        spacing: [10, 15, 5, 15],
        animation: false
      },
      time: {
        useUTC: false
      },
      title: {
        text: '',
      },
      credits: {
        enabled: false
      },
      xAxis: xAxis,
      yAxis: yAxis,
      tooltip: {
        shared: true,
        xDateFormat: '%m-%d-%Y',
      },
      legend: {
        itemDistance: 50,
        maxHeight: 88,
        margin: 5,
        itemMarginBottom: 0,
        enabled: true
      },
      series: series,
      plotOptions: {
        series: {
          marker: {
            enabled: false
          },
          states: {
            inactive: {
              opacity: 1
            },
            hover: {
              lineWidth: 2
            }
          }
        }
      },
    };

    return options;
  }
}
