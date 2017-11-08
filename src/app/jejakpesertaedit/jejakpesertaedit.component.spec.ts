import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JejakpesertaeditComponent } from './jejakpesertaedit.component';

describe('JejakpesertaeditComponent', () => {
  let component: JejakpesertaeditComponent;
  let fixture: ComponentFixture<JejakpesertaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JejakpesertaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JejakpesertaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
