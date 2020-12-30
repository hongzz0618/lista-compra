import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
  @Input() productos: any;
  @Input() slideperview: any;
  @Input() sizeXs: any;
  @Input() enFavoritos = false;


  slideOpts = {
    slidesPerView: 1,
    freeMode: true,
    // centeredSlides:true
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.slideOpts.slidesPerView = this.slideperview
  }

  redirectItem(id) {
    this.router.navigate(["/tabs/tab1/" + id]);
  }

}
