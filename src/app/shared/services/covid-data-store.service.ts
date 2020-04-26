import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataStoreService {
  private localDataSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private _localData: Observable<any> = this.localDataSubject.asObservable();

  constructor(
    private apiService: ApiService
  ) { }

  fetchData() {
    return this.apiService.get('/timeseries.json').pipe(tap(res => {
      this.localDataSubject.next(res);
    }));
  }

  clearData() {
    this.localDataSubject.next(null);
  }

  getAllData() {
    return this._localData;
  }

  getSummaryNumbers() {
    return this._localData.pipe(map(res => {
      const result = {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        date: ''
      };
      if (res) {
        Object.keys(res).forEach(countryName => {
          if (res[countryName]) {
            const latestItem = res[countryName][res[countryName].length - 1];
            result.date = latestItem.date;
            result.confirmed = result.confirmed + latestItem.confirmed;
            result.deaths = result.deaths + latestItem.deaths;
            result.recovered = result.recovered + latestItem.recovered;
          }
        });
      }
      return result;
    }))
  }

  getListCountries() {
    return this._localData.pipe(map(res => {
      if (res) {
        return Object.keys(res);
      }
      return [];
    }))
  }

  getByCountryName(name) {
    return this._localData.pipe(map(res => {
      if (res && res[name]) {
        return [...res[name]];
      }
      return;
    }))
  }
}
