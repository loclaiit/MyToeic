import { Component, Input, OnInit } from '@angular/core';
import { CurrentSessionService } from "../../services/current-session.service";
@Component({
  selector: 'app-part-intro',
  templateUrl: './part-intro.component.html',
  styleUrls: ['./part-intro.component.scss']
})
export class PartIntroComponent implements OnInit {

  @Input() partNbr:number = 1
  constructor(private sessionService: CurrentSessionService) {

  }

  ngOnInit(): void {
  }

}
