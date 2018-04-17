import { Component, OnInit } from '@angular/core';
import{modeloAluno} from "../aluno/modeloAluno.model";
import{servico} from "../aluno/servico";

@Component({
  selector: 'app-pagina-input',
  templateUrl: './pagina-input.component.html',
  styleUrls: ['./pagina-input.component.css']
})
export class PaginaInputComponent implements OnInit {
  alunos:modeloAluno[];
  
  

  constructor(private Servico:servico) { }

  ngOnInit() {
  }
  adicionado(aluno:modeloAluno){
    this.Servico.adicionado(aluno)
    .subscribe((data) => {
      console.log(data);
    },
      (error) => console.log(error));
  
}
  }



