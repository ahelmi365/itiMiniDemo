import { IEmployee } from './../Interfaces/iemployee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private URL = "/assets/Data/employee.json"

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.URL)
      .pipe(
        catchError(err => {
          return throwError(() => err.message || "Server Side Error");
        })
      );
  }












}

