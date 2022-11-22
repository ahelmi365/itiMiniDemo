import { IEmployee } from './../Interfaces/iemployee';
import { ChildComponent } from './../child/child.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor(private employeeService: EmployeeService) { }
  courseName: string = 'Angular Course From iti Parent!';

  messageFromChild: string = "";

  employeeList: IEmployee[] = [];

  employeeGetAllErrorMsg: string = "";

  @ViewChild(ChildComponent) myChild: ChildComponent = new ChildComponent(this.employeeService);


  ngOnInit(): void {

    this.employeeService.getAllEmployees()
      .subscribe(empData => {
        this.employeeList = empData;
      });

    // this.employeeService.gteAllEmps()
    //   .subscribe(res => {
    //     this.employeeList = res;
    //   }, err => this.employeeGetAllErrorMsg = err);
  }

  ngAfterViewInit() {
    // this.myChild.showMessage();
  }

}
