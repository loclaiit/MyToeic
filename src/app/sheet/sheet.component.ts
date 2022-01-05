import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question, Sheet } from '../model/ToeicTest';
import { ApiServiceService } from '../services/api-service.service';
import { CommonService } from '../services/common.service';
import { CurrentSessionService } from '../services/current-session.service';
@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
})
export class SheetComponent implements OnInit {
  sheetSrcContent: string = "../../../assets/audio/test.mp3"
  part:number=0
  sheet: Sheet;
  constructor(
    private common: CommonService,
    private session: CurrentSessionService,
    private router:Router
  ) {
    this.session.isTesting = true
  }

  ngOnInit(): void {
    if(this.session.currentBook !== null){
      this.sheet = this.common.getCurrentSheet()
      this.part = this.session.currentPart
    }else{
      this.session.isTesting = false
      this.router
      .navigateByUrl('/refreshComponent', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['']);
      });
    }
  }
}
