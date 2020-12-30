import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.slideOpts.slidesPerView=this.slideperview
  }

  redirectItem(id) {
    this.router.navigate(["/tabs/tab1/" + id]);
  }
}
