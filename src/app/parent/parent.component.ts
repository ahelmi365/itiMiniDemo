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

  @ViewChild(ChildComponent) myChild: ChildComponent = new ChildComponent(this.employeeService);


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this.myChild.showMessage();
  }

}
