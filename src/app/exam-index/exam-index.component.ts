import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../model/ToeicTest';
import { ApiServiceService } from '../services/api-service.service';
import { CurrentSessionService } from '../services/current-session.service';
// import * as Parser from 'rss-parser';
import * as RSSParser from '../../../node_modules/rss-parser/dist/rss-parser.min.js'
@Component({
  selector: 'app-exam-index',
  templateUrl: './exam-index.component.html',
  styleUrls: ['./exam-index.component.scss'],
})
export class ExamComponent implements OnInit {
  examList: Exam[] = []
  constructor(private router:Router, private _api: ApiServiceService, private _session: CurrentSessionService) {
  }

  ngOnInit(): void {
    this._api.getListExams().subscribe((result: any) =>
        JSON.parse(JSON.stringify(result))['ListExams'].forEach((ele) => {
          this.examList.push({
            Code: ele.Code,
            Description: ele.Description,
            EnglishLevel: ele.EnglishLevel,
            IsFreeVersion: ele.IsFreeVersion,
            AlltimeCount: ele.AlltimeCount
          } as Exam);
        }
      )
    );
  }

  selectPratice(exam){
    this._session.currentBook = exam
    this.router.navigate(['/intro']);
  }
}
