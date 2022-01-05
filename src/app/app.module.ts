import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AudioComponent } from './common/audio/audio.component';
import { IntroComponent } from './intro/intro.component';
import { ExamComponent } from './exam-index/exam-index.component';
import { SheetComponent } from './sheet/sheet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { FormsModule  } from "@angular/forms";
import { CounterDirective } from './counter.directive';
import { ProgressBarComponent } from './nav-bar/progress-bar/progress-bar.component';
import { SheetHeaderComponent } from './sheet/sheet-header/sheet-header.component';
import { PartMenuComponent } from './part-menu/part-menu.component';
import { PartIntroComponent } from './part-menu/part-intro/part-intro.component';
import { CurrentSessionService } from "./services/current-session.service";
import { SheetFooterComponent } from './sheet/sheet-footer/sheet-footer.component';
import { RefreshComponentComponent } from './refresh-component/refresh-component.component';
import { ToeicResultComponent } from './toeic-result/toeic-result.component';
import { ModalComponent } from './modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AudioComponent,
    IntroComponent,
    ExamComponent,
    SheetComponent,
    NavBarComponent,
    CounterDirective,
    ProgressBarComponent,
    SheetHeaderComponent,
    PartMenuComponent,
    PartIntroComponent,
    SheetFooterComponent,
    RefreshComponentComponent,
    ToeicResultComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CurrentSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
