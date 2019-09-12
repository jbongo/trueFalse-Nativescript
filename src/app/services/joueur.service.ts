import { Injectable } from "@angular/core";
import {Joueur} from '../models/Joueur.model';

@Injectable({
    providedIn: "root"
})

export class JoueurService{

    joueur = new Joueur();
    
    initialise(){
        this.joueur.score = 0;
        this.joueur.NB_VIES = 3;
        this.joueur.NB_JOCKER = 2;
       
    }
    getScore(){
       return this.joueur.score;
    }
    getVie(){
        return this.joueur.NB_VIES;
    }
    getJocker(){
        return this.joueur.NB_JOCKER;
    }

    addScore(){
        this.joueur.score += 1;
    }
    removeScore(){
        this.joueur.score -= 1;
    }
    
    removeVie(){
        this.joueur.NB_VIES -= 1 ;
    }
    removeJocker(){
        this.joueur.NB_JOCKER -= 1;
    }


}