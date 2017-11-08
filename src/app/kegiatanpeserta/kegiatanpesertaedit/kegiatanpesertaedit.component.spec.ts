import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanpesertaeditComponent } from './kegiatanpesertaedit.component';

describe('KegiatanpesertaeditComponent', () => {
  let component: KegiatanpesertaeditComponent;
  let fixture: ComponentFixture<KegiatanpesertaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegiatanpesertaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegiatanpesertaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
