import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardItemModel } from "./card-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class CardsService {
    private baseUrl:string ="https://hellow-world-app-default-rtdb.firebaseio.com/";
    private cardsEndpoint:string = "cards.json";

    constructor(private http:HttpClient){
        
    }

    getCards() {
        return this.http.get<CardItemModel []>(this.baseUrl + this.cardsEndpoint);
    }
}