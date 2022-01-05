import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartIntroComponent } from './part-intro.component';

describe('PartIntroComponent', () => {
  let component: PartIntroComponent;
  let fixture: ComponentFixture<PartIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
