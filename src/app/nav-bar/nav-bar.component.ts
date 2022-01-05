import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { CurrentSessionService } from '../services/current-session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  timer: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  math = Math;
  PartDescription:string='';
  constructor(public session:CurrentSessionService, private common:CommonService, private router:Router) {
    //localStorage.setItem("remainTime", "" + 7200);
  }

  ngOnInit(): void {
    this.reloadSheet();
    this.session.reLoadPageObs.subscribe(() => {
      this.reloadSheet()
    });
  }

  storeTimer() {
    localStorage.setItem("remainTime", "" + this.timer);
    //localStorage.setItem("remainTime", "7200");
  }

  setValue(_value){
    this.timer = _value
    this.hours=this.math.floor(this.timer/3600)
    this.minutes=this.math.floor((this.timer-(this.hours*3600))/60)
    this.seconds=((this.timer-(this.hours*3600))-(this.minutes*60));
    this.storeTimer()
  }

  nextPage() {
    this.common.nextPage();
    this.reloadSheet();
  }

  previousPage() {
    this.common.previousPage();
    this.reloadSheet();
  }

  changePart(value){
    this.session.currentPart = value
    this.session.currentSheetNbr = 1
    this.reloadSheet()
  }

  reloadSheet(){
    this.PartDescription = this.common.getPartDescription()
    this.router
    .navigateByUrl('/refreshComponent', { skipLocationChange: true })
    .then(() => {
      this.router.navigate(['sheet']);
    });
  }


}
