import { Component } from "@angular/core";
import { QuestionService } from "../services/question.service";
import { JoueurService } from "../services/joueur.service";

@Component({
    selector:'home',
    templateUrl:'./home.component.html'
})
export class HomeComponent{

    constructor(private joueurService : JoueurService,private questionService : QuestionService ){
        joueurService.initialise();
    }
    jouer(){
        
    }
}