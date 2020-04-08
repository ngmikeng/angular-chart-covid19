import { Component, OnInit } from '@angular/core';
import { CovidDataStoreService } from 'src/app/shared/services/covid-data-store.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, tap } from 'rxjs/operators';
import { ICovid19DateData, ICovid19TimeSeriesData } from 'src/app/models/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedCountry: string = 'Vietnam';
  countries: string[];
  countriesOpts$: Observable<string[]>;
  allData$: Observable<ICovid19TimeSeriesData>;
  dataByCountry$: Observable<ICovid19DateData[]>;
  countryControl = new FormControl(this.selectedCountry);
  displayedColumns: string[] = ['date', 'confirmed', 'recovered', 'deaths'];

  constructor(
    private covidDataStoreService: CovidDataStoreService
  ) { }

  ngOnInit(): void {
    this.covidDataStoreService.fetchData().subscribe();
    this.covidDataStoreService.getListCountries().subscribe(res => {
      this.countries = res;
    });
    this.allData$ = this.covidDataStoreService.getAllData();
    this.countriesOpts$ = this.countryControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    // default load selected country
    this._handleLoadDataByCountry(this.selectedCountry);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.toLowerCase().includes(filterValue));
  }


  onSelectCountry(eventData) {
    if (eventData && eventData.option && eventData.option.value) {
      this.selectedCountry = eventData.option.value;
      this._handleLoadDataByCountry(eventData.option.value);
    }
  }

  private _handleLoadDataByCountry(name) {
    this.dataByCountry$ = this.covidDataStoreService.getByCountryName(name)
      .pipe(map(res => {
        // sort by latest date
        if (res && res.length > 0) {
          return res.sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          });
        }
        return res;
      }));
  }

}
