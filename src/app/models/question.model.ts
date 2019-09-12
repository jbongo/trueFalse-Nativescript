export class Question{
    id:number;
    texte:string;
    reponseBool:boolean;
    reponseText:string;
    image:string;
    difficulte:string;
    categories:string[];   

    constructor(id:number,texte:string,reponseBool:boolean,reponseText:string,image:string,difficulte:string,categories:string[]){
        
        this.id =id;
        this.texte = texte;
        this.reponseBool = reponseBool;
        this.reponseText = reponseText;
        this.image = image;
        this.difficulte = difficulte;
        this.categories = categories;
        this.texte = texte;
        this.texte = texte;
    }
}