import { Component, OnInit } from "@angular/core";
import { VerticalCardItemModel } from "../vertical-card-item.model";
import { VerticalCardsService } from "../vertical_card.service";

@Component({
    selector: 'management-layout',
    templateUrl: 'management-layout.component.html',
    styleUrls: ['management-layout.component.css']
})
export class ManagementLayoutComponent implements OnInit {
    
        vertical_cards: VerticalCardItemModel [] = [];
    
      constructor(private verticalCardsService:VerticalCardsService) {
      }
  ngOnInit(): void {
    this.verticalCardsService.getVerticalCards().subscribe((data: VerticalCardItemModel []) => {
      console.log("Fetching Vertical Cards");
      for(var verticalCard of data){
        console.log(verticalCard);
        this.vertical_cards.push(verticalCard);
      }
    });
  }
}