import { AlertController, Platform, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { ListaCompraService } from '../../services/lista-compra.service';
import { Producto } from '../../interfaces/producto.model';
import { ActionSheetController } from '@ionic/angular';
import { DataLocalFavoritosService } from 'src/app/services/data-local-favorito.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalListaCompraService } from 'src/app/services/data-local-lista-compra.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  productoD: Producto;
  @Input() enFavoritos;
  @Input() id;

  tabStatus = false
  constructor(
    private productoService: ListaCompraService,
    private alert: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private datalocalService: DataLocalFavoritosService,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private modalCtrl: ModalController,
    private listaCompraService: DataLocalListaCompraService,

  ) { }

  ngOnInit() {
    this.productoD = this.productoService.getProduct(this.id);
  }

  onDeleteProduct() {
    this.alert.create({
      header: "¿Estás seguro?",
      message: "¿quieres borrar este producto de la lista de compra?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancelar"
        },
        {
          text: "Borrar",
          handler: () => {
            this.productoService.deleteProduct(this.productoD.id)
            this.back()
          }
        }]
    }).then(el => {
      el.present();
    })
  }
  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Share clicked');
            this.compartirNoticia();
          }
        },
        {
          text: 'Borrar Favorito',
          icon: 'trash',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Borrar de favorito');
            if (this.enFavoritos) {
              this.datalocalService.borrarProductFavorito(this.productoD);
            } else {
              this.listaCompraService.borrarProductlistaCompra(this.productoD);
            }
            this.back()
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-dark',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });

    await actionSheet.present();

  }

  compartirNoticia() {


    if (this.platform.is('cordova')) {
      this.socialSharing.share(
        this.productoD.nombre,
        '',
        '',
        this.productoD.foto
      );
    } else {

      if (navigator['share']) {

        navigator['share']({
          title: this.productoD.nombre,
          text: '',
          url: this.productoD.foto,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('No se pudo compartir porque no se soporta');
      }

    }
  }
  back() {
    this.modalCtrl.dismiss();
  }
}
