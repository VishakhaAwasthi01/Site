import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-page',
  templateUrl: './assignment-page.component.html',
  styleUrls: ['./assignment-page.component.css']
})
export class AssignmentPageComponent implements OnInit {
val:number;
checked : number;
total : number;
status :number;

  constructor() { }

  ngOnInit() {
    this. getLollipop();
  }
  getServing(value :any){
     this.val = value;
  }
  getTotal(){
    var incM  = <HTMLInputElement> document.getElementById('monthly');
    if(incM.checked === true){
     this.status = 1;
    }
    else if(incM.checked === false){
      this.status = 0;
    }
    return status;
  }
  getLollipop(){
  if(this.status === 1){
    var total = this.val*1
  }
  else if(this.status === 0){
    var total = this.val*0.5
  }
  return total;
  }

  getIcecandy(){
    if(this.status === 1){
      var total = this.val*2
    }
    else if(this.status === 0){
      var total = this.val*1
    }
    return total; 
  }

  getSavings(){
    var savings =this.getIcecandy()-this.getLollipop()
    return savings;
  }

getMonthOrYear(){
  if(this.status === 1){
    var check = "Month";
  }
  else if(this.status === 0){
    var check = "Year"
  }
  return check;
}
getServingNo(){
  var s= this.val;
  return s;
}
}
