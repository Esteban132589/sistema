import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedidaComponent } from './lista-medida.component';

describe('ListaMedidaComponent', () => {
  let component: ListaMedidaComponent;
  let fixture: ComponentFixture<ListaMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMedidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
