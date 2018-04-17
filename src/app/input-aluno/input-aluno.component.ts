import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{modeloAluno} from "../aluno/modeloAluno.model";
import{servico} from "../aluno/servico";
@Component({
  selector: 'app-input-aluno',
  templateUrl: './input-aluno.component.html',
  styleUrls: ['./input-aluno.component.css']
})
export class InputAlunoComponent implements OnInit {

  @Output() novoAluno = new EventEmitter();
  @Output() foiEncontrado = new EventEmitter;
  id:string = ""
  Nome : string = "";
  Curso : string = "";
  qtdPresencas: number;
  

  constructor() { }

  ngOnInit() {
  }
  botaoAdicionar(event){
    event.preventDefault();
    this.novoAluno.emit(
      new modeloAluno(this.id, this.Nome, this.Curso, this.qtdPresencas));
  }
  botaoBuscar(aluno:modeloAluno){
    this.foiEncontrado.emit(aluno);
    console.log("passou aqui arara")

  }

  


}
