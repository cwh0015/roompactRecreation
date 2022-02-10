import { Component } from '@angular/core';
import { CardItemModel } from './body/card-item.model';
import { mock_card_list } from './body/mock_card_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellow-world-app';
  cards: CardItemModel [] = [];

  constructor() {
    for (var card of mock_card_list) {
      console.log(card);
      this.cards.push(card);
    }
  }
}
