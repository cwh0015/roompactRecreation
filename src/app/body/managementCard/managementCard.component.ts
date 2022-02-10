import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-managementCard',
    templateUrl: 'managementCard.component.html',
    styleUrls: ['managementCard.component.css']
})

export class ManagementCardComponent {
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