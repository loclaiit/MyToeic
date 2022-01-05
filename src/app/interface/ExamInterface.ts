export interface IExam {
  Code: 'exam test';
  Sheets: ISheet[];
}
export interface ISheet {
  SheetId: 1;
  ImageSrc: 'image test';
  AudioSrc: 'audio test';
  Questions: IQuestion[];
}
export interface IQuestion {
  QuestionCode: 'Q1';
  Order: 1; // 1->200
  Part: 1;
  Content: 'content test';
  Answers: IAnswer[];
}
export interface IAnswer {
  Code: 'A'; //A-B-C-D
  Content: 'answer test';
}
