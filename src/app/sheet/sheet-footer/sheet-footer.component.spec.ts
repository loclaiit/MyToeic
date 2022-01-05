import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFooterComponent } from './sheet-footer.component';

describe('SheetFooterComponent', () => {
  let component: SheetFooterComponent;
  let fixture: ComponentFixture<SheetFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
