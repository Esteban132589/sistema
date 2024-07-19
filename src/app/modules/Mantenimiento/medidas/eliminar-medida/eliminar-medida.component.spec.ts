import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMedidaComponent } from './eliminar-medida.component';

describe('EliminarMedidaComponent', () => {
  let component: EliminarMedidaComponent;
  let fixture: ComponentFixture<EliminarMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMedidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
