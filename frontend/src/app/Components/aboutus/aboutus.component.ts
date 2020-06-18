import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public cards = [
    {
      icon : 'fa-medal',
      title : 'Mision',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis est leo, sed tristique turpis aliquet nec. Vestibulum placerat et nisi sit amet rhoncus. Morbi ultricies metus ac sapien ullamcorper, ut lobortis massa ultricies. Suspendisse congue, est et pellentesque faucibus, ante massa faucibus lorem, ac hendrerit magna odio at libero. '
    },
    {
      icon : 'fa-eye',
      title : 'Vision',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis est leo, sed tristique turpis aliquet nec. Vestibulum placerat et nisi sit amet rhoncus. Morbi ultricies metus ac sapien ullamcorper, ut lobortis massa ultricies. Suspendisse congue, est et pellentesque faucibus, ante massa faucibus lorem, ac hendrerit magna odio at libero. '
    },
    {
      icon : 'fa-heart',
      title : 'Our Values',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis est leo, sed tristique turpis aliquet nec. Vestibulum placerat et nisi sit amet rhoncus. Morbi ultricies metus ac sapien ullamcorper, ut lobortis massa ultricies. Suspendisse congue, est et pellentesque faucibus, ante massa faucibus lorem, ac hendrerit magna odio at libero. '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
