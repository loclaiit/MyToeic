import { Component, OnInit } from '@angular/core';
import { Account, Token } from '../model/Account';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-toeic-result',
  templateUrl: './toeic-result.component.html',
  styleUrls: ['./toeic-result.component.scss']
})
export class ToeicResultComponent implements OnInit {

  userInfo:Account;
  constructor(private common:CommonService) { }

  ngOnInit(): void {

    this.userInfo = new Account
    this.userInfo.AccountId= ""
    this.userInfo.Token= "1234567890"
    this.userInfo.FirstName= "Guest"
    this.userInfo.LastName= "2022"
    this.userInfo.DateOfBirth= "1991/03/18"
    this.userInfo.IdentificationNumber= "999999999"
    this.userInfo.ReadingScore= this.common.getTestListeningResult()
    this.userInfo.ListeningScore= this.common.getTestReadingResult()
  }

}
