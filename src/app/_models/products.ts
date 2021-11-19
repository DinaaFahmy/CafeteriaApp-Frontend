export class Products {
ID?:number;
ProductName?:string;
ItemPrice?:number;
CategoryID?:number;
Availability?:string;
img?:File;
constructor(_id?,_name?,_price?,_category?,_img?,_av?){
    this.ID=_id;
    this.ProductName=_name;
    this.ItemPrice=_price;
    this.CategoryID=_category;
    this.Availability=_av;
    this.img=_img;
}
}
