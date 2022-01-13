import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  constructor(private http: HttpClient) { }

  testApiCall(): Observable<any> {
    return this.http.get(`http://api.plos.org/search?q=title:DNA`).pipe(
      map((data: any) => {
        return data;      
      }),
      catchError(err => { console.log(err); return of(err); })
    );
  }

  getInstance(instanceId: string, jwtToken: string): Observable<any> {
    const baseUrl = 'http://localhost:64306';
    // const baseUrl = 'https://di-rbac-api-dev.di-np.pcf.dell.com';

    return this.http.get(baseUrl + `/api/v1/instances/${instanceId}`)
      .pipe(
      map((data: any) => {
        return data;      
      }),
      catchError(err => { console.log(err); return of(err); })
    );
  }

}
