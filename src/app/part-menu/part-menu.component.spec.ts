import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMenuComponent } from './part-menu.component';

describe('PartMenuComponent', () => {
  let component: PartMenuComponent;
  let fixture: ComponentFixture<PartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
