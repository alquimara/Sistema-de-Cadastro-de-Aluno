import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { servico } from './aluno/servico';


import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { InputAlunoComponent } from './input-aluno/input-aluno.component';
import { PaginaAlunosComponent } from './pagina-alunos/pagina-alunos.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { routing } from './aluno/app.routing';
import { FormsModule } from '@angular/forms';
import { PaginaInputComponent } from './pagina-input/pagina-input.component';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    InputAlunoComponent,
    PaginaAlunosComponent,
    NavegadorComponent,
    PaginaInputComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [servico],
  bootstrap: [AppComponent]
})
export class AppModule { }
