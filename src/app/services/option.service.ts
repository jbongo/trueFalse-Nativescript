import { Injectable } from "@angular/core";
import {Option} from '../models/option.model';

@Injectable({
    providedIn: "root"
})

export class OptionService{
    
    option:Option ;

    
    getDifficulte(){
        return this.option.difficulte;
    }
    setDifficulte(difficulte:string){
        this.option.difficulte  = difficulte;
    }

    getCategorie(){
        return this.option.categorie;
    }
    setCategorie(categorie:string){
        this.option.categorie  = categorie;
    }
}