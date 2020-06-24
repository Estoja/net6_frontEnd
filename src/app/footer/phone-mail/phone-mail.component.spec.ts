import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMailComponent } from './phone-mail.component';

describe('PhoneMailComponent', () => {
  let component: PhoneMailComponent;
  let fixture: ComponentFixture<PhoneMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
