export class Exam {
  Code: string;
  Description: string;
  EnglishLevel: string;
  IsFreeVersion: string;
  AlltimeCount: number;
  Parts: Part[];
}
export class Part {
  PartNumber:number;
  Sheets: Sheet[]
}
export class Sheet {
  SheetNbr:number;
  ContentSrc: string; //Audio-Text-Picture
  ExamCode: string;
  Questions: Question[];
  InnerHTMLContent: string;
}
export class Question {
  QuestionNumber:number;
  SortOrder: number;
  QuestionContent: string; //Image in Listening part
  AnswerC: string;
  AnswerB: string;
  AnswerA: string;
  AnswerD: string;
  ChoosenAnswer: string;
  Score: string;
}
