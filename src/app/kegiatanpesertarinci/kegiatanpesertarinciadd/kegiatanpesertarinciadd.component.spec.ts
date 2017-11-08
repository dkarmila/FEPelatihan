import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertarinciaddComponent } from './kegiatanpesertarinciadd.component';

describe('KegiatanpesertarinciaddComponent', () => {
  let component: KegiatanpesertarinciaddComponent;
  let fixture: ComponentFixture<KegiatanpesertarinciaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertarinciaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertarinciaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
