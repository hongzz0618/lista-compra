import { AlertController, Platform, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCompraService } from '../../services/lista-compra.service';
import { Producto } from '../../interfaces/producto.model';
import { ActionSheetController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit {
  productoD: Producto;
  tabStatus = false
  textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  defaultImage = "/assets/black-1072366_1920.jpg"
  // slideOptActores = {
  //   slidesPerView: 3.3,
  //   freeMode: true,
  //   spaceBetween: 0
  // };

  oculto = 150;

  @Input() id;

  constructor(
    private modalCtrl: ModalController,
    private productoService: ListaCompraService,
    private router: Router,
    private alert: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private datalocalService: DataLocalService,
    private socialSharing: SocialSharing,
    private platform: Platform
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
            this.router.navigate(["/tabs/tab1"]);
          }
        }]
    }).then(el => {
      el.present();
    })
  }

  async IsFavorito() {
    let favoritos
    await this.datalocalService.cargarFavoritos().then(
      res => favoritos = res
    )
    return favoritos
  }
  async lanzarMenu(id) {

    let favoritos = await this.IsFavorito()
    let existe = favoritos.find(p => p.id === id);

    let guardarBorrarBtn;

    if (existe) {

      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de favorito');
          this.datalocalService.borrarProductFavorito(this.productoD);
          // this.router.navigate(["/tabs/tab1"]);
        }
      };

    } else {

      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito');
          this.datalocalService.guardarFavorito(this.productoD);
        }
      };

    }

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
        guardarBorrarBtn,
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
