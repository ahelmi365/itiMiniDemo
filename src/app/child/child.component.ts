import { EmployeeService } from './../Services/employee.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employeeList: any;
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

  this.employeeList = this.employeeService.getAllEmployees();
  }

}
