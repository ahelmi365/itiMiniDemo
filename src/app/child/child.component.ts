import { EmployeeService } from './../Services/employee.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IEmployee } from '../Interfaces/iemployee'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employeeList: IEmployee[] = [];
  employeeGetAllErrorMessage: string = "";

  @Input('CourseNameParent') courseName: string = "";
  messagetextToParent: string = "message from parent";

  @Output() messageToParentEvent = new EventEmitter();

  sendDataToParent(dta: string) {
    this.messageToParentEvent.emit(dta);
  }

  showMessage() {
    console.log("Hello from child component test 2!");

  }
  ngOnInit(): void {

    // this.employeeService.getAll()
    //   .subscribe(data => {
    //     this.employeeList = data;
    //   }, err => { this.employeeGetAllErrorMessage = err });

    // this.employeeService.gteAllEmps()
    // .subscribe(empData=>{
    //   this.employeeList = empData;
    // }, err=>this.employeeGetAllErrorMessage = err);

    this.employeeService.getAllEmployees()
    .subscribe(
      {
        next:(resData)=>this.employeeList =resData,
        error:(err)=>this.employeeGetAllErrorMessage = err,
        complete:()=>console.log('Complete')

      }
    )
  }



}
