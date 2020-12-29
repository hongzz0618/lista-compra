import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: 'app-double-slides',
  templateUrl: './double-slides.component.html',
  styleUrls: ['./double-slides.component.scss'],
})
export class DoubleSlidesComponent implements OnInit {

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
