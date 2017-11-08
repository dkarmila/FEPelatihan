import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertarinciComponent } from './kegiatanpesertarinci.component';

describe('KegiatanpesertarinciComponent', () => {
  let component: KegiatanpesertarinciComponent;
  let fixture: ComponentFixture<KegiatanpesertarinciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertarinciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertarinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
