import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Exam } from '../model/ToeicTest';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private urlRetrieve: string = 'http://localhost:52150/MSWebService.asmx/';

  constructor(private http: HttpClient) {}

  public getListExams(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(this.urlRetrieve + 'GetListExams', {
        params: { IsDelete: '0' },
      })
      .pipe(
        //tap((_) => console.log('got data')),
        retry(1),
        catchError(this.handleError)
      );
  }

  public getQuestionsForExam(examCode: string): Observable<any> {
    return this.http
      .get<Object>(this.urlRetrieve + 'GetQuestionsForExam', {
        params: { ExamCode: examCode },
      })
      .pipe(
        tap((_) => console.log('got list quesions by part')),
        retry(1),
        catchError(this.handleError)
      );
  }

  /**
   * updateTestInfo
   */
  public updateTestInfo(examCode: string) {
    this.http.post(this.urlRetrieve + 'UpdateTestInfo',{params:{ExamCode:examCode}})
  }

  /**
   * updateTestAnswerDetail
   */
  public updateTestAnswerDetail(examCode: string) {
    this.http.post(this.urlRetrieve + 'UpdateTestAnswerDetail',{params:{ExamCode:examCode}})
  }

  // public validateAccount(userId:string, userToken:string): Observable<any> {
  //   return this.http.get<Object>(this.urlRetrieve + 'ValidateAccount',{params: {AccountId: userId, Token:userToken}}).pipe(
  //     tap((_) => console.log('got data')),
  //     retry(1),
  //     catchError(this.handleError)
  //   );
  // }
  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
