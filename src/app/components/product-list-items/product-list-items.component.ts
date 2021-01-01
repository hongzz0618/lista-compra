import { Component, OnInit, Input } from "@angular/core";
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ProductDetailPage } from '../product-detail/product-detail.page';
import { Producto } from 'src/app/interfaces/producto.model';

@Component({
  selector: "app-product-list-items",
  templateUrl: "./product-list-items.component.html",
  styleUrls: ["./product-list-items.component.scss"],
})
export class ProductListItemsComponent implements OnInit {
  items: Producto[];
  enfavoritos: any;
  @Input() type;

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };
  constructor(private storage: Storage, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    if (this.type === "Favoritos") {
      this.enfavoritos = true
      this.loadFavorito()
    } else {
      this.enfavoritos = false
      this.loadListaCompra()
    }
  }

  async loadFavorito() {
    let favorito = await this.storage.get('favoritos');
    if (favorito) {
      this.items = favorito
    }
  }

  async loadListaCompra() {
    let listaCompra = this.items = await this.storage.get('listaCompra');
    if (listaCompra) {
      this.items = listaCompra
    }
  }

  // redirectItem(id) {
  //   this.router.navigate([
  //     "/tabs/tab3/" + id,
  //     { enFavoritos: true },
  //   ]);
  // }

  async ProductItemModal(id) {

    const modal = await this.modalCtrl.create({
      component: ProductDetailPage,
      componentProps: {
        id: id,
        enFavoritos: this.enfavoritos
      }
    });

    modal.present();

  }

  back() {
    this.modalCtrl.dismiss();
  }
}
