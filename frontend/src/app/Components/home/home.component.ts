import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { trigger, transition, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('ShowButtonScroller',[
      transition('open => closed', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('1s')
      ])
    ]),
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public slides = [
    { 
      src : "https://images.pexels.com/photos/214045/pexels-photo-214045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
      title : "Titulo N° 1",
      subtitle : "Subtitulo N° 1",
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis est leo, sed tristique turpis aliquet nec. Vestibulum placerat et nisi sit amet rhoncus. Morbi ultricies metus ac sapien ullamcorper, ut lobortis massa ultricies. Suspendisse congue, est et pellentesque faucibus, ante massa faucibus lorem, ac hendrerit magna odio at libero. "
    },
    { 
      src : "https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
      title : "Titulo N° 2",
      subtitle : "Subtitulo N° 2",
      text : "Sed semper aliquam risus, eget pretium metus. Sed eleifend tellus id velit vehicula vestibulum. Praesent quam ante, facilisis et arcu non, fermentum pulvinar tortor. Integer nec sem sodales, luctus orci a, semper ex. In massa metus, fermentum eu consectetur nec, sollicitudin et nibh. Quisque ut elit sit amet ligula tincidunt porttitor. Vivamus vel laoreet ex."
    },
    { 
      src : "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
      title : "Titulo N° 3",
      subtitle : "Subtitulo N° 3",
      text : "Pellentesque vitae sagittis nibh, non finibus odio. Cras eget tortor et neque vulputate ultrices vel quis elit. Suspendisse potenti. Integer eget laoreet ligula, non iaculis justo. Suspendisse et porta elit. Duis mollis in purus vel aliquet. Nullam efficitur ipsum eu ipsum laoreet, vitae finibus arcu rhoncus."
    },
    { 
      src : "https://images.pexels.com/photos/207204/pexels-photo-207204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" ,
      title : "Titulo N° 4",
      subtitle : "Subtitulo N° 4",
      text : "Curabitur fringilla dui sit amet tellus dapibus, at eleifend mi facilisis. Etiam placerat feugiat diam, eget imperdiet ante tempor sit amet. Nulla at leo non tortor commodo commodo id ut felis. Nulla id tellus vitae purus sagittis condimentum vel sit amet sem. Integer nec turpis lectus. Nullam quis lacus sed quam lacinia commodo. Integer in urna ut nisi iaculis fringilla eget at neque. Proin et sapien enim. Sed malesuada accumsan magna, in aliquam ante consectetur in."
    },
    { 
      src : "https://images.pexels.com/photos/8092/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title : "Titulo N° 5",
      subtitle : "Subtitulo N° 5",
      text : "Maecenas elementum mi eget odio laoreet, et iaculis lacus tincidunt. Quisque sollicitudin libero commodo mi sagittis, eget cursus sapien feugiat. Donec et lacus elit. Aliquam erat volutpat."
    }
  ];

  public showButton = false;
  constructor() { }

  scroll = new Subject<number>();
  ngOnInit() {
    this.scroll
      .pipe(debounceTime(200))
      .subscribe((y) => this.dealWithScroll(window.scrollY));
  }
  ngOnDestroy() {
    this.scroll.complete();
  }
  @HostListener('window:scroll') watchScroll() {
    this.scroll.next(window.scrollY);
  }
  dealWithScroll(y: number) {
    if(y >= 400){
      this.showButton = true;
    }else if(y < 400){
      this.showButton = false;
    }
  }

}
