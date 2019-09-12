import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { QuestionComponent } from "./pagequestion/question.component";
import { ReponseComponent } from "./pagereponse/reponse.component";
import { OptionComponent } from "./pageoption/option.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "question", component: QuestionComponent },
    { path: "questions", component: QuestionComponent },
    { path: "reponse/:id/:result", component: ReponseComponent },
    { path: "option", component: OptionComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
