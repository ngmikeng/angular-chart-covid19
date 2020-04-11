import { Component, OnInit } from '@angular/core';
import { CovidDataStoreService } from '../shared/services/covid-data-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  totalConfirmed$: Observable<string>;
  totalRecovered$: Observable<string>;
  totalDeaths$: Observable<string>;

  constructor(
    private covidDataStoreService: CovidDataStoreService
  ) { }

  ngOnInit(): void {
    this.totalConfirmed$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.confirmed.toLocaleString();
    }));
    this.totalRecovered$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.recovered.toLocaleString();;
    }));
    this.totalDeaths$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.deaths.toLocaleString();;
    }));
  }

}
