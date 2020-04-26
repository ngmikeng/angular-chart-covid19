import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ICovid19TimeSeriesData } from 'src/app/models/data.model';

import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
HC_map(Highcharts);
import * as worldMapData from '@highcharts/map-collection/custom/world.geo.json';
import { CaseDataType } from '../../global.types';

@Component({
  selector: 'app-world-map-chart',
  templateUrl: './world-map-chart.component.html',
  styleUrls: ['./world-map-chart.component.scss']
})
export class WorldMapChartComponent implements OnInit {
  highcharts: any = Highcharts;
  mapData = (worldMapData as any).default;

  private _dataType: CaseDataType = 'confirmed';
  private _dataChart: ICovid19TimeSeriesData;

  @ViewChild('chartContainer') chartContainerEle: ElementRef;

  @Input()
  set dataType(value: CaseDataType) {
    this._dataType = value;
    if (this._dataChart && this.chartContainerEle && this.chartContainerEle.nativeElement) {
      this.loadChart(this._dataChart, this.mapData, this._dataType);
    }
  }
  @Input()
  set chartData(data: ICovid19TimeSeriesData) {
    if (data && this.chartContainerEle && this.chartContainerEle.nativeElement) {
      this._dataChart = Object.assign({}, data);
      // Names used in Highcharts Map Collection
      this._dataChart['United States of America'] = this._dataChart.US;
      this._dataChart['South Korea'] = this._dataChart['Korea, South'];
      this._dataChart['Czech Republic'] = this._dataChart.Czechia;

      this.loadChart(this._dataChart, this.mapData, this._dataType);
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.chartContainerEle && this.chartContainerEle.nativeElement) {
      const chartOptions = this.getChartOptions(this.mapData, [], this._dataType);
      this.highcharts.mapChart(this.chartContainerEle.nativeElement, chartOptions);
    }
  }

  getChartOptions(mapData, seriesData, dataType) {
    const colorState = {
      confirmed: {
        minColor: 'rgba(100, 10, 100, 0.1)',
        maxColor: 'rgba(100, 10, 100, 1)'
      },
      recovered: {
        minColor: 'rgba(10, 100, 0, 0.1)',
        maxColor: 'rgba(10, 100, 0, 1)'
      },
      deaths: {
        minColor: 'rgba(196, 0, 0, 0.1)',
        maxColor: 'rgba(196, 0, 0, 1)'
      }
    };
    let colorAxis = colorState.deaths;
    if (dataType && colorState[dataType]) {
      colorAxis = colorState[dataType];
    }
    const options = {
      chart: {
        spacingLeft: 1,
        spacingRight: 1
      },
      title: {
        text: null
      },
      credits: {
        enabled: false
      },
      mapNavigation: {
        enabled: true
      },
      colorAxis: colorAxis,
      tooltip: {
        headerFormat: '<b>{point.point.name}</b><br>',
        pointFormat: '<b>{point.value}</b> cases'
      },
      legend: {
        title: {
          style: {
            fontWeight: 'normal'
          }
        },
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'bottom'
      },
      series: [{
        id: 'map',
        data: seriesData,
        mapData,
        joinBy: ['name', 'key'],
        cursor: 'pointer',
        states: {
          select: {
            color: undefined,
            borderColor: '#333'
          }
        },
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)'
      }]
    };

    return options;
  }

  loadChart(timeSeriesData: ICovid19TimeSeriesData, mapData, dataType: CaseDataType) {
    const seriesData = mapData.features.map((data) => {
      const country = data.properties;

      if (timeSeriesData[country.name]) {
        const countryData = timeSeriesData[country.name];
        const latestData = countryData[countryData.length - 1];
        return {
          key: country.name,
          value: latestData[dataType] ? latestData[dataType] : latestData.confirmed
        }
      } else {
        return {
          key: country.name,
          value: null
        }
      }
    });
    const chartOptions = this.getChartOptions(mapData, seriesData, dataType);
    this.highcharts.mapChart(this.chartContainerEle.nativeElement, chartOptions);
  }

}
