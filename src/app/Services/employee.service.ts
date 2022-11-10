import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getAllEmployees() {
    return [
      { "name": "Ali", "age": 33 },
      { "name": "Taha", "age": 55 },
      { "name": "Mohamed", "age": 43 },
      { "name": "Farag", "age": 37 }
    ]
  }
  constructor() { }
}
