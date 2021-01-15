import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {
  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService,
    private uiService: UiServiceService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
  }


  async actualizar(fActualizar: NgForm) {

    if (fActualizar.invalid) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario(this.usuario);
    if (actualizado) {
      // toast con el mensaje de actualizado
      this.uiService.presentToast('Registro actualizado');
    } else {
      // toast con el error
      this.uiService.presentToast('No se pudo actualizar');
    }

  }


  back() {
    this.modalCtrl.dismiss();
  }

  logout() {
    this.back();
    this.usuarioService.logout();
  }
}
