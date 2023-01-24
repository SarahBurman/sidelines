import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelinesLoginComponent } from './sidelines-login.component';

describe('SidelinesLoginComponent', () => {
  let component: SidelinesLoginComponent;
  let fixture: ComponentFixture<SidelinesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidelinesLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidelinesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
