import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products = [
    {
      "src" : "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "title" : " Prueba 2.1",
      "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eget tortor feugiat aliquam mollis id augue. Vivamus bibendum pellentesque neque nec iaculis. Morbi nec dui vel ex semper tincidunt. ",
      "price" : "550$",
      "path" : "10"
    },{
      "src" : "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "title" : " Prueba 2.2",
      "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eget tortor feugiat aliquam mollis id augue. Vivamus bibendum pellentesque neque nec iaculis. Morbi nec dui vel ex semper tincidunt. ",
      "price" : "550$",
      "path" : "11"
    },{
      "src" : "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "title" : " Prueba 2.3",
      "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eget tortor feugiat aliquam mollis id augue. Vivamus bibendum pellentesque neque nec iaculis. Morbi nec dui vel ex semper tincidunt. ",
      "price" : "550$",
      "path" : "12"
    },{
      "src" : "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "title" : " Prueba 2.4",
      "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at diam eget tortor feugiat aliquam mollis id augue. Vivamus bibendum pellentesque neque nec iaculis. Morbi nec dui vel ex semper tincidunt. ",
      "price" : "550$",
      "path" : "13"
    }
  ];
  public data = [];
  public page = 1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    // this.httpClient.get("assets/products.json").subscribe(products =>{
    //   this.products = products;
    //   this.page = 1;
    //   this.data = this.products[this.page - 1].data;
    //   this.getProducts(this.page);
    // })
    this.getProducts(this.page);

  }

  getProducts(page){
    this.page = page;
    this.data = this.products;
  };

}
