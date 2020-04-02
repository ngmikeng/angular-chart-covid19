import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  private formatResponse(res: any) {
    return res;
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}${path}`, { params })
      .pipe(map(this.formatResponse))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, bodyData: any, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.post(
      `${environment.apiBaseUrl}${path}`,
      bodyData,
      { params }
    )
    .pipe(map(this.formatResponse))
    .pipe(catchError(this.formatErrors));
  }
}
