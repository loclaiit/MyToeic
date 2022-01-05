import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentSessionService } from 'src/app/services/current-session.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public session:CurrentSessionService,private router:Router) { }

  ngOnInit(): void {
  }

  showResult(){
    this.session.isTesting = false;
    this.router.navigate(['result']);
  }
}
