import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
  @Input() productos: Producto[] = [];
  @Input() slideperview: any;
  @Input() sizeXs: any;

  slideOpts = {
    slidesPerView: 1,
    freeMode: true,
    // centeredSlides:true
  };

  constructor(
  ) { }

  ngOnInit() {
    this.slideOpts.slidesPerView=this.slideperview
  }

}
