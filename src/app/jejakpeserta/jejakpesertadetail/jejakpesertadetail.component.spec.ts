import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JejakpesertadetailComponent } from './jejakpesertadetail.component';

describe('JejakpesertadetailComponent', () => {
  let component: JejakpesertadetailComponent;
  let fixture: ComponentFixture<JejakpesertadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JejakpesertadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JejakpesertadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
