import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAccesoListaComponent } from './log-acceso-lista.component';

describe('LogAccesoListaComponent', () => {
  let component: LogAccesoListaComponent;
  let fixture: ComponentFixture<LogAccesoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAccesoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAccesoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
