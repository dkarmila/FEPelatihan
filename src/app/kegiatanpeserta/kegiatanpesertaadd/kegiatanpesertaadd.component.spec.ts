import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertaaddComponent } from './kegiatanpesertaadd.component';

describe('KegiatanpesertaaddComponent', () => {
  let component: KegiatanpesertaaddComponent;
  let fixture: ComponentFixture<KegiatanpesertaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
