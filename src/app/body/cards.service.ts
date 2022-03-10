import { Injectable } from "@angular/core";
import { CardItemModel } from "./card-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable(
    {providedIn: 'root'}
)
export class CardsService {
    

    constructor(private db:AngularFireDatabase){
        
    }

    public getCards() {
        return this.db.list<CardItemModel>("cards").valueChanges();
    }
     
}