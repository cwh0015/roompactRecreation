export class CardItemModel {
    img: string;
    title: string;
    subheading: string;
    bodyInfo: string;

    constructor (img: string, title: string, subheading: string, bodyInfo: string,) {
        this.img = img;
        this.title = title;
        this.subheading = subheading;
        this.bodyInfo = bodyInfo;
    }
}