import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductListItemsComponent } from '../../components/product-list-items/product-list-items.component';
import { CuentaComponent } from '../../components/cuenta/cuenta.component';

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
    const modal = type === "Lista Compra" || type === "Favoritos" ? await this.modalCtrl.create({
      component: ProductListItemsComponent,
      componentProps: {
        type: type
      }
    }) : await this.modalCtrl.create({
      component: CuentaComponent,
      componentProps: {
        type: type
      }
    })

    modal.present();
  }
}
