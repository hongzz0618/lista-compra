import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductListItemsComponent } from '../../components/product-list-items/product-list-items.component';
import { CuentaComponent } from '../../components/cuenta/cuenta.component';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private modalCtrl: ModalController,private usuarioService: UsuarioService) { }

  ngOnInit() {this.usuario = this.usuarioService.getUsuario();}
  
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

    modal.onDidDismiss()
    .then((data) => {
      this.ngOnInit();
    });

    modal.present();
  }
}
