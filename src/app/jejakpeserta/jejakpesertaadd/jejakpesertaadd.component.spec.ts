import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JejakpesertaaddComponent } from './jejakpesertaadd.component';

describe('JejakpesertaaddComponent', () => {
  let component: JejakpesertaaddComponent;
  let fixture: ComponentFixture<JejakpesertaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JejakpesertaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JejakpesertaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
