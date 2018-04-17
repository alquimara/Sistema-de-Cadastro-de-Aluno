import{Routes, RouterModule, Router, ROUTES} from "@angular/router";
import{PaginaInputComponent} from "../pagina-input/pagina-input.component";
import { PaginaAlunosComponent } from "../pagina-alunos/pagina-alunos.component";
const APP_ROUTES:  Routes =[
    {path: "", redirectTo: "/pagina-alunos", pathMatch: "full"},
    {path: "pagina-alunos", component: PaginaAlunosComponent},
    {path: "pagina-input", component: PaginaInputComponent},
]
export const routing=RouterModule.forRoot(APP_ROUTES);