import { Component, OnInit } from '@angular/core';
import { CovidDataStoreService } from 'src/app/shared/services/covid-data-store.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map, tap } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { ICovid19DateData, ICovid19TimeSeriesData } from 'src/app/models/data.model';
import { CaseDataType } from 'src/app/shared/global.types';

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
  dataType: CaseDataType = 'confirmed';

  private _dataByCountry: ICovid19DateData[];
  private _allData: ICovid19TimeSeriesData;

  constructor(
    private covidDataStoreService: CovidDataStoreService
  ) { }

  ngOnInit(): void {
    this.covidDataStoreService.fetchData().subscribe();
    this.covidDataStoreService.getListCountries().subscribe(res => {
      this.countries = res;
    });
    this.allData$ = this.covidDataStoreService.getAllData();
    this.allData$.subscribe(res => {
      this._allData = res;
    });
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

  exportCSV() {
    if (this.selectedCountry && this._dataByCountry && this._dataByCountry.length > 0) {
      const sampleItem = this._dataByCountry[0];
      const headers = Object.keys(sampleItem);
      const dataRows = [];
      this._dataByCountry.forEach(item => {
        dataRows.push([...Object.values(item)])
      });
      const dataString = [
        headers.join(','),
        dataRows.join('\n')
      ].join('\n');

      const blob = new Blob([dataString], {type: "text/csv;charset=utf-8"});
      saveAs(blob, `covid19_${this.selectedCountry}_${new Date().getTime()}.csv`);
    }
  }

  exportWorldCSV() {
    if (this._allData) {
      const countries = Object.keys(this._allData);
      const sampleItem = this._allData['US'][0];
      const headers = ['country', ...Object.keys(sampleItem)];
      const dataRows = [];
      countries.forEach(key => {
        let countryName = key;
        if (countryName.indexOf('Korea, South') > -1) {
          countryName = 'South Korea';
        }
        if (this._allData[key]) {
          const countryData = this._allData[key];
          const latestItem = countryData[countryData.length - 1];
          dataRows.push([countryName, ...Object.values(latestItem)])
        }
      });
      const dataString = [
        headers.join(','),
        dataRows.join('\n')
      ].join('\n');

      const blob = new Blob([dataString], {type: "text/csv;charset=utf-8"});
      saveAs(blob, `covid19_World_${new Date().getTime()}.csv`);
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
      }))
      .pipe(tap(res => {
        this._dataByCountry = res
      }));
  }

}
