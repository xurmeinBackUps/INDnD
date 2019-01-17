import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourDsixRollerComponent } from './four-dsix-roller.component';

describe('FourDsixRollerComponent', () => {
  let component: FourDsixRollerComponent;
  let fixture: ComponentFixture<FourDsixRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourDsixRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourDsixRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
