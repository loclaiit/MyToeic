import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CurrentSessionService } from 'src/app/services/current-session.service';

@Component({
  selector: 'app-sheet-header',
  templateUrl: './sheet-header.component.html',
  styleUrls: ['./sheet-header.component.scss']
})
export class SheetHeaderComponent implements OnInit,OnChanges {

  @Input() ContentSource:string;
  part:number;
  constructor(private session:CurrentSessionService) { }

  ngOnInit(): void {
    this.part = this.session.currentPart
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
