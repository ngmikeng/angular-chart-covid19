import { Component, OnInit } from '@angular/core';
import { CovidDataStoreService } from '../shared/services/covid-data-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LIST_LANG, DEFAULT_LANG, AppSettingsService } from '../shared/services/app-settings.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  totalConfirmed$: Observable<string>;
  totalRecovered$: Observable<string>;
  totalDeaths$: Observable<string>;
  lastUpdateDate$: Observable<string>;

  languages = LIST_LANG;
  langControl = new FormControl(DEFAULT_LANG);

  constructor(
    private covidDataStoreService: CovidDataStoreService,
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.totalConfirmed$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.confirmed.toLocaleString();
    }));
    this.totalRecovered$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.recovered.toLocaleString();
    }));
    this.totalDeaths$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.deaths.toLocaleString();
    }));
    this.lastUpdateDate$ = this.covidDataStoreService.getSummaryNumbers().pipe(map(res => {
      return res.date;
    }));
  }

  onChangeLang(event) {
    if (event && event.value) {
      this.appSettingsService.setLanguage(event.value);
    }
  }

}
