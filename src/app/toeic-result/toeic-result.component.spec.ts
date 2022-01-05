import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeicResultComponent } from './toeic-result.component';

describe('ToeicResultComponent', () => {
  let component: ToeicResultComponent;
  let fixture: ComponentFixture<ToeicResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToeicResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeicResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
