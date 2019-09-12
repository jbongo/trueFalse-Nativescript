import { Component } from "@angular/core";
import { Question } from "../models/question.model";
import { QuestionService } from "../services/question.service";
import { Joueur } from "../models/joueur.model";
import { RouterExtensions } from "nativescript-angular/router";
import { JoueurService } from "../services/joueur.service";
import { confirm } from "tns-core-modules/ui/dialogs";


@Component({
    selector:'question',
    templateUrl:'./question.component.html'
})
export class QuestionComponent{

    question:Question;
    joueur:Joueur = new Joueur();
    score:number;
    jock:number;
    vie:number;
     options = {
        title: "Jocker",
        message: "êtes vous sûr de vouloir utiliser un jocker?",
        okButtonText: "Oui",
        cancelButtonText: "Non",
        neutralButtonText: "Annuler"
    };
    constructor(private questionService: QuestionService, private joueurService:JoueurService, private routerExtensions: RouterExtensions){
        this.question = questionService.getQuestion();
        this.score = this.joueurService.getScore();
        this.vie = this.joueurService.getVie();
        this.jock = this.joueurService.getJocker();
    }



    reponse(rep:boolean){
       

        if(rep==this.question.reponseBool){
            this.joueurService.addScore();
            this.routerExtensions.navigateByUrl("/reponse/"+this.question.id+"/good") ;
            console.log("goodddd");
            
        }else{
            (this.score > 0) ? this.joueurService.removeScore() : null;
            this.joueurService.removeVie();
           
            this.routerExtensions.navigateByUrl("/reponse/"+this.question.id+"/bad") ;
            
        }
    }

    jocker(){
        confirm(this.options).then((result: boolean) => {
            if(result){
                this.joueurService.removeJocker();

                this.question = this.questionService.getQuestion();

                
            }
        });
    }
}