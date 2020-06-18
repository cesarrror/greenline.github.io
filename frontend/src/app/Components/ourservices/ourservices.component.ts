import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  public slides;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get("assets/carousel-services.json").subscribe(data =>{
      this.slides = data;
      this.slides.forEach((element, index) => {
        this.slides[index].odd = false;
        if(index % 2 == 0){
          this.slides[index].odd = true
          console.log()
        }
        console.log(this.slides[index].odd)
      });
    });

  }

}
