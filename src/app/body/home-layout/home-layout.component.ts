import { Component, OnInit } from "@angular/core";
import { CardItemModel } from "../card-item.model";
import { CardsService } from "../cards.service";

@Component({
    selector:'home-layout',
    templateUrl:'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent implements OnInit{
    cards: CardItemModel [] = [];

  constructor(private cardsService:CardsService) {
  }
  ngOnInit(): void {
    this.cardsService.getCards().subscribe((data: CardItemModel []) => {
      console.log("Fetching cards");
      for(var card of data) {
        console.log(card);
        this.cards.push(card);
      }
    });
  }
}