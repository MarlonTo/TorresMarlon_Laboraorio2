import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioServicioComponent } from './usuario-servicio.component';

describe('UsuarioServicioComponent', () => {
  let component: UsuarioServicioComponent;
  let fixture: ComponentFixture<UsuarioServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
