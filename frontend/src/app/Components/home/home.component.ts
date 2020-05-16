import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides = [
    { src : "https://images.pexels.com/photos/214045/pexels-photo-214045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { src : "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { src : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { src : "https://images.pexels.com/photos/207204/pexels-photo-207204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { src : "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
