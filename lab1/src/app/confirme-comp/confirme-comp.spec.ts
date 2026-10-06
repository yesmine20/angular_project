import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeComp } from './confirme-comp';

describe('ConfirmeComp', () => {
  let component: ConfirmeComp;
  let fixture: ComponentFixture<ConfirmeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmeComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
