import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  deptId: any = "";
  allDepartments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "ReactJS" },
    { "id": 3, "name": "NodeJS" },
    { "id": 4, "name": "MongoDB" }
  ]
  constructor(protected router: Router, protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => this.deptId = params.get("id"),
      error: (err) => console.log(err.message),
      complete: () => console.log("Active ID complete", this.deptId)
    });

  }

  onDeptClick(id: any): void {
    // console.log(id);
    // this.router.navigateByUrl(`/department/${id}`);
    this.router.navigate(["/department", id]);

  }



  isActive(dept: any): any {
    return dept.id == this.deptId;

  }

}
