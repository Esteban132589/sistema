import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProovedorComponent } from './lista-proovedor.component';

describe('ListaProovedorComponent', () => {
  let component: ListaProovedorComponent;
  let fixture: ComponentFixture<ListaProovedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProovedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
