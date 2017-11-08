import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertadetailComponent } from './kegiatanpesertadetail.component';

describe('KegiatanpesertadetailComponent', () => {
  let component: KegiatanpesertadetailComponent;
  let fixture: ComponentFixture<KegiatanpesertadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
