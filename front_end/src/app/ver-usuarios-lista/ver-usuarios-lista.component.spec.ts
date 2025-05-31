import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsuariosListaComponent } from './ver-usuarios-lista.component';

describe('VerUsuariosListaComponent', () => {
  let component: VerUsuariosListaComponent;
  let fixture: ComponentFixture<VerUsuariosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerUsuariosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerUsuariosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
