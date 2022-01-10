import { Component, OnInit } from '@angular/core';
import { CovidDataStoreService } from '../shared/services/covid-data-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LIST_LANG, DEFAULT_LANG, AppSettingsService } from '../shared/services/app-settings.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  destroy$: Subject<any> = new Subject();
  totalConfirmed = 'N/A';
  totalRecovered = 'N/A';
  totalDeaths = 'N/A';
  lastUpdateDate = 'N/A';

  languages = LIST_LANG;
  langControl = new FormControl(DEFAULT_LANG);

  constructor(
    private covidDataStoreService: CovidDataStoreService,
    private appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.covidDataStoreService.getSummaryNumbers()
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.totalConfirmed = res.confirmed.toLocaleString();
      this.totalRecovered = res.recovered.toLocaleString();
      this.totalDeaths = res.deaths.toLocaleString();
      this.lastUpdateDate = res.date;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onChangeLang(event) {
    if (event && event.value) {
      this.appSettingsService.setLanguage(event.value);
    }
  }

}
