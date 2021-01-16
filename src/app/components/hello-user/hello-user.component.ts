import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss'],
})
export class HelloUserComponent implements OnInit {

  usuario: Usuario = {};
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.usuario = this.usuarioService.getUsuario();
      event.target.complete();
    }, 2000);
  }
}
