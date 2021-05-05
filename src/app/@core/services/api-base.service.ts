import {Inject, Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) {
  }


  POST_API<T>(path: string[], body: any, isLoaderOn = false, isShowSuccess = true): Observable<T> {

    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.post<T>(apiPath, body)
      .pipe(
        map(data => data),
        catchError(err => {
          // this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }

  UPDATE_API<T>(path: string[], body: any, isLoaderOn = false): Observable<T> {

    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.put<T>(apiPath, body)
      .pipe(
        map(data => data),
        catchError(err => {
          // this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }


  GET<T>(path: string[], isLoaderOn = false): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.get<T>(apiPath)
      .pipe(
        map(data => data),
        catchError(err => {
          // this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }

  DELETE<T>(path: string[]): Observable<T> {
    const apiPath = `${this.baseUrl}${path.join('/')}`;
    return this.http.delete<T>(apiPath)
      .pipe(
        map(data => data),
        catchError(err => {
          // this.alertService.showError(err.error.message);
          return throwError(err);
        }));
  }
}
