import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserRecords(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }
  getEmployeeRecords(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/csv/read/dependency")
      .pipe(
        retry(0), // Retries once
        catchError(this.errorHandler) //catches error in custom method
      );
  }

  private errorHandler(error: { message: any; }) {
    return throwError(() => error.message);
  }
}