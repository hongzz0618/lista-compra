import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
  @Input() productos: any;
  @Input() slideperview: any;
  @Input() autoplay: any;
  @Input() enFavoritos = false;


  slideOpts = {
    slidesPerView: 1,
    // freeMode: true,
    initialSlide: 0,
    autoplay: true,
    // centeredSlides:true
  };

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.slideOpts.slidesPerView = this.slideperview
    this.slideOpts.autoplay = this.autoplay
  }

  redirectItem(id) {
    this.router.navigate(["/tabs/tab1/" + id]);
  }

  async detailModal(id: string) {

    const modal = await this.modalCtrl.create({
      component: ProductDetailModalComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
