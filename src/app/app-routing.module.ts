import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PartIntroComponent } from './part-menu/part-intro/part-intro.component';
import { ExamComponent } from "./exam-index/exam-index.component";
import { SheetComponent } from './sheet/sheet.component';
import { RefreshComponentComponent } from './refresh-component/refresh-component.component';
import { ToeicResultComponent } from './toeic-result/toeic-result.component';

const routes: Routes = [
  {path:'',component:ExamComponent},
  {path:'intro',component:IntroComponent},
  {path:'refreshComponent', component:RefreshComponentComponent},
  {path:'result', component:ToeicResultComponent},
  // {path:'part-intro/:part',component:PartIntroComponent,
  // children: [
  //   { path: 'sheet', component: SheetComponent }
  // ]}
  { path: 'sheet', component: SheetComponent },
  {path:'*',component:ExamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
