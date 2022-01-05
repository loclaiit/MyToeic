import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { CommonService } from '../services/common.service';
import { CurrentSessionService } from '../services/current-session.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  wellcomeAccount:{
    FirstName:'test',
    LastName:'test',
    DateOfBirth:''
  }
  examCode:string
  constructor(private router:Router,private session: CurrentSessionService, private common:CommonService) {

  }

  ngOnInit(): void {
    this.examCode = this.session.currentBook.Description
    this.common.CollectExamData()
  }

  Click_Start(){
    this.session.currentSheetNbr = 1;
    this.session.currentPart = 1;
    this.router.navigate(['sheet']);
  }
}
