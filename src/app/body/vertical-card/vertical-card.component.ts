import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent {

    @Input() img: string;
    @Input() title: string;
    @Input() subheading: string;
    @Input() bodyInfo: string;

    constructor() {
        this.img = "";
        this.title = "Missing Title";
        this.subheading = "Missing subheading";
        this.bodyInfo = "Missing body info";
    }
}

