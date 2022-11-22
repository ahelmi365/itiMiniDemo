import { IEmployee } from './../Interfaces/iemployee';
import { EmployeeService } from './../Services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employeeList: IEmployee[] = [];
  errorEmpList: any = ""
  constructor(protected employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (empList) => this.employeeList = empList,
      error: (err) => this.errorEmpList = err,
      complete: () => console.log("EmployeeList Complete")
    })
  }
}

