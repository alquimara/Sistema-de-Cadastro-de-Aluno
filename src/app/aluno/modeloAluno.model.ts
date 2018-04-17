export class modeloAluno{
    constructor(
        public id:string,
        public Nome :string,
        public Curso: string,
        public qtdPresencas : number
    ){

        this.id = id;
        this.Nome = Nome;
        this.Curso= Curso;
        this.qtdPresencas = 0;
        

    }

}