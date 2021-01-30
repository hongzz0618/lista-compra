import { AlertController, Platform, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListaCompraService } from '../../services/lista-compra.service';
import { Producto } from '../../interfaces/producto.model';
import { ActionSheetController } from '@ionic/angular';
import { DataLocalFavoritosService } from 'src/app/services/data-local-favorito.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalListaCompraService } from 'src/app/services/data-local-lista-compra.service';
// import { TopSliderComponent } from '../top-slider/top-slider.component';

@Component({
  selector: 'app-product-detail-modal',
  templateUrl: './product-detail-modal.component.html',
  styleUrls: ['./product-detail-modal.component.scss'],
})
export class ProductDetailModalComponent implements OnInit {
  productoD: Producto;
  tabStatus = false;
  textLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  defaultImage = "/assets/black-1072366_1920.jpg";
  parecidos: any;
  oculto = 150;

  @Input() id;

  constructor(
    private modalCtrl: ModalController,
    private productoService: ListaCompraService,
    private router: Router,
    private alert: AlertController,
    private actionSheetCtrl: ActionSheetController,
    private favoritoService: DataLocalFavoritosService,
    private listaCompraService: DataLocalListaCompraService,
    private socialSharing: SocialSharing,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.productoD = this.productoService.getProduct(this.id);
    this.parecidos = this.productoService.getProductsByCategory(...this.productoD.categoria);
    this.parecidos = this.parecidos.filter(el=> el.id!=this.id)
  }


  async guardarAFavorito() {
    this.favoritoService.guardarFavorito(this.productoD);
  }

  async guardarAListaCompra() {
    this.listaCompraService.guardarlistaCompra(this.productoD);
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
