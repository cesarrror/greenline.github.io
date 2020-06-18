import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public images = [
    {
      "url" : "https://picsum.photos/id/237/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1026/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1031/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1035/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1043/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1049/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1055/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1062/200/300"
    },
    {
      "url" : "https://picsum.photos/id/107/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1074/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1080/200/300"
    },
    {
      "url" : "https://picsum.photos/id/1083/200/300"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
