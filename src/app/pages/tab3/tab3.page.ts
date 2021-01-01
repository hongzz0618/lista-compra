import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductListItemsComponent } from '../../components/product-list-items/product-list-items.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async ProductListModal(type: string) {

    const modal = await this.modalCtrl.create({
      component: ProductListItemsComponent,
      componentProps: {
        type: type
      }
    });

    modal.present();

  }
}
