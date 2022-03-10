import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VerticalCardItemModel } from "./vertical-card-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class VerticalCardsService {
    private baseUrl:string ="https://hellow-world-app-default-rtdb.firebaseio.com/";
    private cardsEndpoint:string = "vertical-cards.json";

    constructor(private http:HttpClient){
        
    }

    getVerticalCards() {
        return this.http.get<VerticalCardItemModel []>(this.baseUrl + this.cardsEndpoint);
    }
}