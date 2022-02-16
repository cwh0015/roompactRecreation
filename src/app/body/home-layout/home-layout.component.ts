import { Component } from "@angular/core";
import { CardItemModel } from "../card-item.model";
import { mock_card_list } from "../mock_card_list";

@Component({
    selector:'home-layout',
    templateUrl:'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
    cards: CardItemModel [] = [];

  constructor() {
    for (var card of mock_card_list) {
      console.log(card);
      this.cards.push(card);
    }
  }
}