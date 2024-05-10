import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbooksComponent } from './viewallbooks.component';

describe('ViewallbooksComponent', () => {
  let component: ViewallbooksComponent;
  let fixture: ComponentFixture<ViewallbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewallbooksComponent]
    });
    fixture = TestBed.createComponent(ViewallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
