import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: '',
    password: ''
  };

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    avatar: ''
  };

  loginslide: any = false;
  registrarslide: any = true;



  constructor(private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService) { }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {

    if (fLogin.invalid) { return; }

    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if (valido) {
      // navegar al tabs
      this.navCtrl.navigateRoot('/home/tabs/tab1', { animated: true });
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario o contraseña no son correctos.');
    }


  }

  async registro(fRegistro: NgForm) {

    if (fRegistro.invalid) { return; }

    const valido = await this.usuarioService.registro(this.registerUser);

    if (valido) {
      // navegar al tabs
      this.navCtrl.navigateRoot('/home/tabs/tab1', { animated: true });
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }


  }


  mostrarRegistro() {
    this.loginslide = false;
    this.registrarslide = true;
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.loginslide = true;
    this.registrarslide = false;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
