import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertarincidetailComponent } from './kegiatanpesertarincidetail.component';

describe('KegiatanpesertarincidetailComponent', () => {
  let component: KegiatanpesertarincidetailComponent;
  let fixture: ComponentFixture<KegiatanpesertarincidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertarincidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertarincidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
