import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProovedorComponent } from './agregar-proovedor.component';

describe('AgregarProovedorComponent', () => {
  let component: AgregarProovedorComponent;
  let fixture: ComponentFixture<AgregarProovedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProovedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
