import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAccesoComponent } from './log-acceso.component';

describe('LogAccesoComponent', () => {
  let component: LogAccesoComponent;
  let fixture: ComponentFixture<LogAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
