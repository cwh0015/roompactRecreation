import { Component, OnInit } from '@angular/core';
import { CardItemModel } from '../body/card-item.model';
import { CardsService } from '../body/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  constructor(private ps:CardsService) { }

  ngOnInit(): void {
  }

  addCard(card:CardItemModel){
    console.log("You pressed submit form")
    console.log(card)
    this.ps.addCard(card);
  }

}
