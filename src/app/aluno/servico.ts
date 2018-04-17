import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http'; 
import{modeloAluno} from "../aluno/modeloAluno.model";
import { Observable } from 'rxjs'; import 'rxjs/add/operator/map'
 import 'rxjs/add/operator/catch'

@Injectable()
export class servico{
    url: string = "http://rest.learncode.academy/api/alquimara/alunos";
    constructor(private http:Http){}
    alunos = [];
    

    getAlunos(){
        return this.http.get(this.url)
            .map((response:Response) => {
                this.alunos = [];
                for(let a of response.json()) {
                    this.alunos.push(new modeloAluno(a.id,a.Nome, a.Curso, a.qtdPresencas))
                }
                return this.alunos;
            })
            .catch((error: Response) => Observable.throw(error))

    }

    adicionado(aluno:modeloAluno){
        return this.http.post(this.url, aluno)
        .map((response: Response) =>  response.json())
        .catch((error: Response) => Observable.throw(error));
    }
   
    presenca(aluno:modeloAluno){
        console.log(aluno)
        return  this.http.put(this.url + '/' + aluno.id, {id:aluno.id, Nome:aluno.Nome, Curso:aluno.Curso, qtdPresencas:aluno.qtdPresencas})
        .map((response: Response) => response)
        .catch((error: Response) => Observable.throw(error));
        
    }
    excluido(aluno:modeloAluno){
        return this.http.delete(this.url + "/" + aluno.id)
            .map((response:Response) => response.text)
            .catch((error: Response) => Observable.throw(error));
        
        } 
        
    encontrado(aluno:modeloAluno){
        for(let b of this.alunos){
            if (b == aluno){
                return aluno.id;
            }
        }

        

    }


    
    
    
}
