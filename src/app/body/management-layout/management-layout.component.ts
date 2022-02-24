import { Component } from "@angular/core";

import { mock_vertical_card_list } from "../mock_vertical_card_list";

import { VerticalCardItemModel } from "../vertical-card-item.model";

@Component({
    selector: 'management-layout',
    templateUrl: 'management-layout.component.html',
    styleUrls: ['management-layout.component.css']
})
export class ManagementLayoutComponent {
    
        vertical_cards: VerticalCardItemModel [] = [];
    
      constructor() {
        for (var vertical_card of mock_vertical_card_list) {
          console.log(vertical_card);
          this.vertical_cards.push(vertical_card);
        }
      }
    
}