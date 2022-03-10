import { Injectable } from "@angular/core";
import { VerticalCardItemModel } from "./vertical-card-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class VerticalCardsService {
   
    constructor(private db:AngularFireDatabase){
        
    }

    public getVerticalCards() {
        return this.db.list<VerticalCardItemModel>("vertical-cards").valueChanges();
    }
}