import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { CommonService } from 'src/app/services/common.service';
import { CurrentSessionService } from 'src/app/services/current-session.service';

@Component({
  selector: 'app-sheet-footer',
  templateUrl: './sheet-footer.component.html',
  styleUrls: ['./sheet-footer.component.scss'],
})
export class SheetFooterComponent implements OnInit {

  pageType:number=0
  constructor(private common: CommonService, private router: Router, private session: CurrentSessionService) {}
  ngOnInit(): void {
    this.pageType = this.session.pageType
  }

  nextPage() {
    this.common.nextPage();
    this.router
      .navigateByUrl('/refreshComponent', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['sheet']);
      });
  }

  previousPage() {
    this.common.previousPage();
    this.router
      .navigateByUrl('/refreshComponent', { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['sheet']);
      });
  }
}
