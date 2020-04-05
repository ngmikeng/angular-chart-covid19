import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MultiDataChartService } from '../../services/multi-data-chart.service';
import { ICovid19DateData } from 'src/app/models/data.model';

@Component({
  selector: 'app-multi-data-chart',
  templateUrl: './multi-data-chart.component.html',
  styleUrls: ['./multi-data-chart.component.scss']
})
export class MultiDataChartComponent implements OnInit {
  highcharts: any = Highcharts;

  @ViewChild('chartContainer') chartContainerEle: ElementRef;

  @Input()
  set chartData(data: ICovid19DateData[]) {
    if (data && this.chartContainerEle && this.chartContainerEle.nativeElement) {
      this.loadChart(data);
    }
  }

  constructor(
    private multiDataChartService: MultiDataChartService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if (this.chartContainerEle && this.chartContainerEle.nativeElement) {
      const chartOptions = this.multiDataChartService.getChartOptions([], [], []);
      this.highcharts.chart(this.chartContainerEle.nativeElement, chartOptions);
    }
  }

  getXAxisOpts() {
    return [
      {
        type: 'datetime',
        showEmpty: false,
        gridLineWidth: 1,
        title: {
          text: 'Date'
        }
      }
    ]
  }

  getYAxisOpts() {
    const items = ['Cases'];
    const result = items.map(name => {
      return {
        title: {
          text: name,
          style: {
            fontFamily: '"Open Sans", Roboto, Arial, sans-serif',
            fontWeight: 'bold'
          }
        },
        opposite: true,
      };
    })
    return result;
  }

  getSeriesOpts(paramData: ICovid19DateData[]) {
    const configItems = [{
      name: 'Confirmed',
      color: 'orange'
    }, {
      name: 'Recovered',
      color: 'green'
    }, {
      name: 'Deaths',
      color: 'red'
    }];
    return configItems.map(config => {
      const seriesData = paramData.map(dataItem => {
        return {
          x: new Date(dataItem.date).getTime(),
          y: dataItem[config.name.toLowerCase()]
        };
      })
      const seriesOpt = {
        name: config.name,
        data: seriesData.sort((a, b) => a.x - b.x),
        color: config.color
      };
      return seriesOpt;
    });
  }

  loadChart(data: ICovid19DateData[]) {
    const xAxisOpt = this.getXAxisOpts();
    const yAxisOpt = this.getYAxisOpts();
    const seriesOpt = this.getSeriesOpts(data);
    const chartOptions = this.multiDataChartService.getChartOptions(xAxisOpt, yAxisOpt, seriesOpt);
    this.highcharts.chart(this.chartContainerEle.nativeElement, chartOptions);
  }

}
