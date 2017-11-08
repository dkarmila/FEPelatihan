import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertarincieditComponent } from './kegiatanpesertarinciedit.component';

describe('KegiatanpesertarincieditComponent', () => {
  let component: KegiatanpesertarincieditComponent;
  let fixture: ComponentFixture<KegiatanpesertarincieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertarincieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertarincieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
