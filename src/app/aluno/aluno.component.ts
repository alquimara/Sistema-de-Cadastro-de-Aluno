import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { modeloAluno } from './modeloAluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
 
  @Input() alunos:modeloAluno[];
  @Output() recebeuPresencas = new EventEmitter;
  @Output() foiExcluido = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }
  botaopresencas(aluno:modeloAluno){
    this.recebeuPresencas.emit(aluno); 
  }
  botaoExcluir(aluno:modeloAluno){
    this.foiExcluido.emit(aluno);
    
  }
  
 
  }

