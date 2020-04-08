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
      if (res) {
        return res[name];
      }
      return;
    }))
  }
}
