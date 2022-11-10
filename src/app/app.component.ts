import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itiMiniDemo';
  inputData:string="";
  loggedIn:boolean=false;
  hasError: boolean = false;
  specialText: boolean = true;
  isDisabled = false;

  cars:string[] = ["Car 0", "Car 1", "Car 2", 'Car 3']

  myDate:Date = new Date();
  carType:string="alentra"

  changeData(dta:string){
    this.inputData = dta;
  }
  messageClass = {
    "has-error": this.hasError,
    "no-error": !this.hasError,
    "special-text": this.specialText
  }

  styleH2={
    color:'red',
    backgroundColor:'yellow',
    fontStyle:'italic'
  }

  constructor() {
    // console.log(this.messageClass);

  }
}
