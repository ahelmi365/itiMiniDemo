import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  paramID: any = "";
  erroDept: any = "";
  constructor(protected activatedRoute: ActivatedRoute, protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (params: ParamMap) => this.paramID = params.get('id'),
      error: (err) => this.erroDept = err,
      complete: () => console.log("Dept id complete")
    })
  }

  goToPrevDept(): any {
    let prevID = parseInt(this.paramID) - 1;
    // this.router.navigateByUrl(`/department/${prevID}`)
    this.router.navigate(["/department", prevID])
  }

  goToNextDept(): any {
    let nextID = parseInt(this.paramID) + 1;
    // this.router.navigateByUrl(`/department/${nextID}`)
    this.router.navigate(["/department", nextID])
  }

  goToDepartments(id: any): any {
    // this.router.navigateByUrl("/departments");
    this.router.navigate(["/departments", { id: id }]);
  }

  goToOverView(): any {
    this.router.navigate(["department-overview"], {relativeTo:this.activatedRoute})
  }

  goToContact(): any {

    this.router.navigate(["department-contact"], {relativeTo:this.activatedRoute});
  }

}
