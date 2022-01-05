import { Injectable } from '@angular/core';
import { Exam, Part, Question, Sheet } from '../model/ToeicTest';
import { ApiServiceService } from './api-service.service';
import { CurrentSessionService } from './current-session.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private session: CurrentSessionService,
    private api: ApiServiceService
  ) {}

  nextPage() {
    this.session.currentSheetNbr += 1;
    //If current sheet is last sheet of current Part, move to next Part's first sheet
    if (
      this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
        .length < this.session.currentSheetNbr
    ) {
      this.session.currentPart += 1; //Next Part
      this.session.currentSheetNbr = 1; // First sheet
    }

    if (
      this.session.currentPart == 7 &&
      this.session.currentSheetNbr ==
        this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
          .length
    )
      this.session.pageType = 2;
    //last page
    else this.session.pageType = 0;
    this.session.reLoadPage.next(1);
  }

  previousPage() {
    this.session.currentSheetNbr -= 1;
    //If current sheet is first sheet of current Part, move to previous Part's last sheet
    if (this.session.currentSheetNbr == 0) {
      this.session.currentPart -= 1; //Previous Part
      this.session.currentSheetNbr =
        this.session.currentBook.Parts[
          this.session.currentPart - 1
        ].Sheets.length; // Last sheet
    }
    if (this.session.currentPart == 1 && this.session.currentSheetNbr == 1)
      this.session.pageType = 1;
    else this.session.pageType = 0;
    this.session.reLoadPage.next(1);
  }

  CollectExamData() {
    if (this.session.currentBook !== undefined) {
      this.api
        .getQuestionsForExam(this.session.currentBook.Code)
        .subscribe((result: any) => {
          let newExam: Exam = new Exam();
          newExam.Code = this.session.currentBook.Code;
          newExam.Parts = [];
          let listSheets = JSON.parse(JSON.stringify(result))['ListSheets'];
          let listQuestions = JSON.parse(JSON.stringify(result))[
            'ListQuestions'
          ];
          [1, 2, 3, 4, 5, 6, 7].forEach((partNo) => {
            let part: Part = new Part();
            let sheets: Sheet[] = [];
            let findsheets = listSheets.filter((e) => e.Part == partNo);

            for (let index = 0; index < findsheets.length; index++) {
              sheets.push({
                SheetNbr: findsheets[index].SheetNbr,
                ContentSrc: findsheets[index].ContentSrc,
                ExamCode: findsheets[index].ExamCode,
                InnerHTMLContent: findsheets[index].InnerHTMLContent,
              } as Sheet);

              let questions: Question[] = [];
              let findquestions = listQuestions.filter(
                (e) => e.PartNo == partNo && e.SheetNo == sheets[index].SheetNbr
              );

              for (let i = 0; i < findquestions.length; i++) {
                questions.push({
                  QuestionContent: findquestions[i].QuestionContent,
                  AnswerA: findquestions[i].AnswerA,
                  AnswerB: findquestions[i].AnswerB,
                  AnswerC: findquestions[i].AnswerC,
                  AnswerD: findquestions[i].AnswerD,
                  Score: findquestions[i].Correct,
                  SortOrder: findquestions[i].SortOrder,
                } as Question);
              }
              sheets[sheets.length - 1].Questions = questions;
            }
            part.PartNumber = partNo;
            part.Sheets = sheets;
            newExam.Parts.push(part);
          });
          this.session.currentBook = newExam;
          this.session.pageType = 1;
        });
    }
  }


  getCurrentSheet(): Sheet {
    return this.session.currentBook.Parts[this.session.currentPart - 1].Sheets[
      this.session.currentSheetNbr - 1
    ];
  }
  getPartDescription(): string {
    let description: string = 'Part I - Picture Description (page 1/1)';
    if (this.session.currentBook == null) return description;
    switch (this.session.currentPart) {
      case 1:
        description = 'Part I - Picture Description';
        break;
      case 2:
        description = 'Part II - Question Response';
        break;
      case 3:
        description = 'Part III - Conversations';
        break;
      case 4:
        description = 'Part IV - Short Talks';
        break;
      case 5:
        description = 'Part V - Incomplete Sentences';
        break;
      case 6:
        description = 'Part VI - Text Completion';
        break;
      default:
        description = 'Part VII - Reading Comprehension';
        break;
    }
    return (
      description +
      ' (page ' +
      this.session.currentSheetNbr +
      '/' +
      this.session.currentBook.Parts[this.session.currentPart - 1].Sheets
        .length +
      ')'
    );
  }
  getUnAnswerQuestionsList() {
    let listQuestionNumber: string = '';
    for (let index = 0; index < this.session.currentPart; index++) {
      for (let index2 = 0; index2 < this.session.currentSheetNbr; index2++) {
        listQuestionNumber += this.session.currentBook.Parts[index].Sheets[
          index2
        ].Questions.filter(function (item) {
          return item.ChoosenAnswer == undefined;
        })
          .map(function (ele) {
            return ele.SortOrder;
          })
          .join(',');
        listQuestionNumber += ',';
      }
    }

    console.log(listQuestionNumber);
  }

  // TEST RESULT Starts

  getTestListeningResult(): number {
    let correctListening = 0;

    this.session.currentBook.Parts.forEach((part) => {
      part.Sheets.forEach((sheet) => {
        //count right answers in Listening parts (1->4)
        if ([1, 2, 3, 4].indexOf(part.PartNumber) > -1) {
          correctListening += sheet.Questions.filter(function (item) {
            return (
              item.ChoosenAnswer !== undefined &&
              item.ChoosenAnswer == item.Score
            );
          }).length;
        }
      });
    });
    return this.estimateListeningScore(correctListening);
  }
  getTestReadingResult(): number {
    this.getUnAnswerQuestionsList();
    let correctReading = 0;

    this.session.currentBook.Parts.forEach((part) => {
      part.Sheets.forEach((sheet) => {
        //count right answer in Reading parts (5->7)
        if ([5, 6, 7].indexOf(part.PartNumber) > -1) {
          correctReading += sheet.Questions.filter(function (item) {
            return (
              item.ChoosenAnswer !== undefined &&
              item.ChoosenAnswer == item.Score
            );
          }).length;
        }
      });
    });
    return this.estimateReadingScore(correctReading);
  }
  private estimateListeningScore(score): number {
    let scoreListeningArr = [
      { 6: 5 },
      { 7: 10 },
      { 8: 15 },
      { 9: 20 },
      { 10: 25 },
      { 11: 30 },
      { 12: 35 },
      { 13: 40 },
      { 14: 45 },
      { 15: 50 },
      { 16: 55 },
      { 17: 60 },
      { 18: 65 },
      { 19: 70 },
      { 20: 75 },
      { 21: 80 },
      { 22: 85 },
      { 23: 90 },
      { 24: 95 },
      { 25: 100 },
      { 26: 105 },
      { 27: 110 },
      { 28: 115 },
      { 29: 120 },
      { 30: 125 },
      { 31: 135 },
      { 32: 140 },
      { 33: 145 },
      { 34: 150 },
      { 35: 155 },
      { 36: 160 },
      { 37: 165 },
      { 38: 170 },
      { 39: 180 },
      { 40: 185 },
      { 41: 190 },
      { 42: 195 },
      { 43: 200 },
      { 44: 210 },
      { 45: 220 },
      { 46: 225 },
      { 47: 230 },
      { 48: 235 },
      { 49: 240 },
      { 50: 245 },
      { 51: 250 },
      { 52: 255 },
      { 53: 260 },
      { 54: 270 },
      { 55: 275 },
      { 56: 280 },
      { 57: 285 },
      { 58: 295 },
      { 59: 300 },
      { 60: 305 },
      { 61: 310 },
      { 62: 315 },
      { 63: 320 },
      { 64: 325 },
      { 65: 330 },
      { 66: 335 },
      { 67: 340 },
      { 68: 345 },
      { 69: 350 },
      { 70: 360 },
      { 71: 365 },
      { 72: 370 },
      { 73: 375 },
      { 74: 380 },
      { 75: 390 },
      { 76: 395 },
      { 77: 400 },
      { 78: 405 },
      { 79: 410 },
      { 80: 420 },
      { 81: 425 },
      { 82: 430 },
      { 83: 435 },
      { 84: 440 },
      { 85: 450 },
      { 86: 455 },
      { 87: 460 },
      { 88: 470 },
      { 89: 475 },
      { 90: 480 },
      { 91: 485 },
      { 92: 490 },
      { 100: 495 },
    ];
    let findScore = scoreListeningArr.find((e) => Object.keys(e)[0] >= score);
    if (findScore != null) return findScore[Object.keys(findScore)[0]];
    else return 0;
  }
  private estimateReadingScore(score): number {
    let scoreReadingArr = [
      { 9: 5 },
      { 10: 10 },
      { 11: 15 },
      { 12: 20 },
      { 13: 25 },
      { 14: 30 },
      { 15: 35 },
      { 16: 40 },
      { 17: 45 },
      { 18: 50 },
      { 19: 55 },
      { 20: 60 },
      { 21: 65 },
      { 22: 70 },
      { 23: 75 },
      { 24: 80 },
      { 25: 90 },
      { 26: 95 },
      { 27: 100 },
      { 28: 110 },
      { 29: 115 },
      { 30: 120 },
      { 31: 125 },
      { 32: 130 },
      { 33: 135 },
      { 34: 140 },
      { 35: 145 },
      { 36: 150 },
      { 37: 155 },
      { 38: 160 },
      { 39: 170 },
      { 40: 175 },
      { 41: 180 },
      { 42: 185 },
      { 43: 195 },
      { 44: 200 },
      { 45: 205 },
      { 46: 210 },
      { 47: 220 },
      { 48: 225 },
      { 49: 230 },
      { 50: 235 },
      { 51: 240 },
      { 52: 250 },
      { 53: 255 },
      { 54: 260 },
      { 55: 270 },
      { 56: 275 },
      { 57: 280 },
      { 58: 285 },
      { 59: 290 },
      { 60: 295 },
      { 61: 300 },
      { 62: 305 },
      { 63: 310 },
      { 64: 320 },
      { 65: 325 },
      { 66: 330 },
      { 67: 335 },
      { 68: 340 },
      { 69: 345 },
      { 70: 350 },
      { 71: 355 },
      { 72: 360 },
      { 73: 365 },
      { 74: 370 },
      { 75: 375 },
      { 76: 380 },
      { 77: 385 },
      { 78: 390 },
      { 79: 395 },
      { 80: 400 },
      { 81: 405 },
      { 82: 405 },
      { 83: 410 },
      { 84: 415 },
      { 85: 420 },
      { 86: 425 },
      { 87: 430 },
      { 88: 435 },
      { 89: 445 },
      { 90: 450 },
      { 91: 455 },
      { 92: 465 },
      { 93: 470 },
      { 94: 480 },
      { 95: 485 },
      { 96: 490 },
      { 100: 495 },
    ];
    let findScore = scoreReadingArr.find((e) => Object.keys(e)[0] >= score);
    if (findScore != null) return findScore[Object.keys(findScore)[0]];
    else return 0;
  }

  // TEST RESULT Ends
}
