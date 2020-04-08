import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ICovid19TimeSeriesData } from 'src/app/models/data.model';

import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
HC_map(Highcharts);
import * as worldMapData from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-world-map-chart',
  templateUrl: './world-map-chart.component.html',
  styleUrls: ['./world-map-chart.component.scss']
})
export class WorldMapChartComponent implements OnInit {
  highcharts: any = Highcharts;
  mapData = (worldMapData as any).default;

  @ViewChild('chartContainer') chartContainerEle: ElementRef;

  @Input()
  set chartData(data: ICovid19TimeSeriesData) {
    if (data && this.chartContainerEle && this.chartContainerEle.nativeElement) {
      // Names used in Highcharts Map Collection
      data['United States of America'] = data.US;
      data['South Korea'] = data['Korea, South'];
      data['Czech Republic'] = data.Czechia;

      this.loadChart(data, this.mapData);
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.chartContainerEle && this.chartContainerEle.nativeElement) {
      const chartOptions = this.getChartOptions(this.mapData, []);
      this.highcharts.mapChart(this.chartContainerEle.nativeElement, chartOptions);
    }
  }

  getChartOptions(mapData, seriesData) {
    return {
      chart: {
        spacingLeft: 1,
        spacingRight: 1
      },
      title: {
        text: null
      },
      mapNavigation: {
        enabled: true,
        // buttonOptions: {
        //   verticalAlign: 'bottom'
        // }
      },
      colorAxis: {
        minColor: 'rgba(196, 0, 0, 0.1)',
        maxColor: 'rgba(196, 0, 0, 1)'
      },
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
        // joinBy: ['name', 'name'],
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
  }

  loadChart(timeSeriesData: ICovid19TimeSeriesData, mapData) {
    const seriesData = mapData.features.map((data) => {
      const country = data.properties;

      if (timeSeriesData[country.name]) {
        const countryData = timeSeriesData[country.name];
        const latestData = countryData[countryData.length - 1];
        return {
          key: country.name,
          value: latestData.confirmed
        }
      } else {
        return {
          key: country.name,
          value: null
        }
      }
    });
    const chartOptions = this.getChartOptions(mapData, seriesData);
    this.highcharts.mapChart(this.chartContainerEle.nativeElement, chartOptions);
  }

}
