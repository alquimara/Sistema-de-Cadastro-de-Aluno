import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlunosComponent } from './pagina-alunos.component';

describe('PaginaAlunosComponent', () => {
  let component: PaginaAlunosComponent;
  let fixture: ComponentFixture<PaginaAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
