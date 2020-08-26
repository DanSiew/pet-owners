import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataServiceError } from 'src/app/core/models';

@Injectable()
export class PersonDetailsDataService {
  constructor(private http: HttpClient) {}

  public getPersonDetails(): Observable<any[]> {
    const url = 'http://agl-developer-test.azurewebsites.net/people.json';
    return this.http.get<any[]>(url).pipe(catchError(this.handleError()));
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      return throwError(error);
    };
  }
}
