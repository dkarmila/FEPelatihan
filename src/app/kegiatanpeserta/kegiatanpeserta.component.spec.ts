import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertaComponent } from './kegiatanpeserta.component';

describe('KegiatanpesertaComponent', () => {
  let component: KegiatanpesertaComponent;
  let fixture: ComponentFixture<KegiatanpesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
