import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Exam, Sheet } from '../model/ToeicTest';

@Injectable({
  providedIn: 'root',
})
export class CurrentSessionService {
  public currentBook: Exam = null;
  public currentSheetNbr: number = 1;
  public currentPart: number = 5;
  public isTesting: boolean = false;
  public pageType:number=0; //0:not set, 1:first page, 2: last page
  public loadBook: Subject<Exam>;
  public reLoadPage: Subject<Object>;
  public reLoadPageObs;

  public remainSeconds: number = 7200;
  constructor() {
    this.loadBook = new Subject<Exam>();

    this.loadBook.subscribe((value) => {
      this.currentBook = value;
    });
    this.reLoadPage = new Subject();
    this.reLoadPageObs = this.reLoadPage.asObservable()
  }
}
