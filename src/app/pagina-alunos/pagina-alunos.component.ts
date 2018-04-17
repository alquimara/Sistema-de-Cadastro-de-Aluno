import { Component, OnInit } from '@angular/core';
import{modeloAluno} from "../aluno/modeloAluno.model";
import{servico} from "../aluno/servico";

@Component({
  selector: 'app-pagina-alunos',
  templateUrl: './pagina-alunos.component.html',
  styleUrls: ['./pagina-alunos.component.css']
})
export class PaginaAlunosComponent implements OnInit {
  alunos :modeloAluno[];
  constructor( private Servico:servico) { }
 

  ngOnInit() {
    this.fillTable();
  
  }
  fillTable() {
    this.Servico.getAlunos()
      .subscribe((data) => {
        this.alunos = data;
      },
        (error) => console.log(error));
  }

 
  PresencaRecebida(aluno:modeloAluno){
    aluno.qtdPresencas = aluno.qtdPresencas +1;
    console.log(aluno.qtdPresencas);
    this.Servico.presenca(aluno)
    .subscribe(data=>{
    },
    error=>console.log(error));

    



  }
  excluido(aluno:modeloAluno){
    this.Servico.excluido(aluno)
    .subscribe(data=>{
      console.log(data);
      this.fillTable();
    },
    error=>console.log(error));
    
}
encontrado(aluno:modeloAluno){
  console.log(this.Servico.encontrado(aluno))
  console.log("chegou aqui, amém");


}

}

