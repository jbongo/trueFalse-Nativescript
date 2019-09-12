import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Joueur} from "../models/joueur.model";
import {JoueurService} from "../services/joueur.service"
import { QuestionService } from "../services/question.service";
import { Question } from "../models/question.model";
@Component({
    selector:'reponse',
    templateUrl:'./reponse.component.html'
})
export class ReponseComponent{
    res:string;
    score:number;
    vie:number;
    questionId:number;
    question:any;

   constructor(private route: ActivatedRoute, private joueurService : JoueurService,private questionService : QuestionService){

    this.res = route.snapshot.params.result;
    this.questionId = route.snapshot.params.id;
    this.question = questionService.getQuestionById(this.questionId);
    this.score = joueurService.getScore();
    this.vie = joueurService.getVie();
    this.score = joueurService.getScore();
    
   }
   test(){
    //    console.log(this.question.categories);
       
   }
}