import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.model';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'app-double-slides',
  templateUrl: './double-slides.component.html',
  styleUrls: ['./double-slides.component.scss'],
})
export class DoubleSlidesComponent implements OnInit {

  @Input() productos: Producto[] = [];
  @Input() slideperview: any;

  slideOpts = {
    slidesPerView: 1,
    freeMode: true,
  };

  constructor(private router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.slideOpts.slidesPerView=this.slideperview
  }

  redirectItem(id) {
    this.router.navigate(["/tabs/tab1/" + id]);
  }

  async detailModal( id: string ) {

    const modal = await this.modalCtrl.create({
      component: ProductDetailModalComponent,
      componentProps: {
        id
      }
    });
    
    modal.present();
  
  }
}
