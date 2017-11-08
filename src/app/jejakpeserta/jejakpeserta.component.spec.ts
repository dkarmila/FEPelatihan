import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JejakpesertaComponent } from './jejakpeserta.component';

describe('JejakpesertaComponent', () => {
  let component: JejakpesertaComponent;
  let fixture: ComponentFixture<JejakpesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JejakpesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JejakpesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
