import { Injectable } from "@angular/core";
import {Question} from '../models/question.model';

@Injectable({
    providedIn: "root"
})

export class QuestionService{
    questions:Question[] = [
        new Question(0,'La femelle du chat est la chatte',true,'Le chat a pour femelle la chatte',null,'facile',['Animaux']),
        new Question(1,'Le tilapia est un mamifère',false,'le tilapia ',null,'facile',['Animaux']),
        new Question(2,'Un chien avale sans macher',true,'Le chien avale sans macher',null,'facile',['Animaux']),
        new Question(3,'la tortue n\'est pas un reptile',false,'la tortue est un reptile',null,'facile',['Animaux']),
        new Question(4,'La capitale de la France est marseille',false,'La capitale de la France est Paris',null,'facile',['Pays']),
        new Question(5,'La capitale de la Belgique est Bruxelle',true,'La capitale de la Belgique est Bruxelle',null,'facile',['Pays']),
        new Question(6,'La capitale de l\'Espagne est Barcelone',false,'La capitale de l\'Espagne est Madrid',null,'facile',['Pays']),
        new Question(7,'Le plus haut sommet du monde est en Amérique',false,'C\'est l\'Everest, il se qui se trouve en Asie',null,'facile',['Geographie']),

      
    ];
      // new Question( "Un litre d'eau pése 1 kg?", "Oui","1", "Physique", true),
        // new Question( "L'homme a besoin de dioxyde de carbone pour vivre?", "Il a besoin oxygene","2", "Physique", false),
        // new Question( "La tomate est un fruit?", "Oui","1", "Biologie", true),
        // new Question( "Le saumon est un mammifere?", "Non c'est un ovipare ","2", "Biologie", false),
     question:Question;

    
     getQuestion(){
        var rand = this.questions[Math.floor(Math.random() * this.questions.length)];
        this.question = rand;
        return this.question;
    }
    getQuestionById(id:number){
       
       for (var i = 0; i<this.questions.length;i++){
        if (this.questions[i].id == id){
            return this.questions[i];
        }
       }
        return null;
    }

}