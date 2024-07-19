import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElimninarClienteComponent } from './elimninar-cliente.component';

describe('ElimninarClienteComponent', () => {
  let component: ElimninarClienteComponent;
  let fixture: ComponentFixture<ElimninarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElimninarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElimninarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
