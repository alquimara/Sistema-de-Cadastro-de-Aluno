import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAlunoComponent } from './input-aluno.component';

describe('InputAlunoComponent', () => {
  let component: InputAlunoComponent;
  let fixture: ComponentFixture<InputAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
